<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Models\Order;
use Inertia\Inertia;

class DashboardController extends Controller
{
    /**
     * Display the dashboard.
     */
    public function index()
    {
        // Get statistics for dashboard
        $stats = [
            'total_orders' => Order::count(),
            'active_orders' => Order::whereIn('status', ['confirmed', 'in_production'])->count(),
            'pending_payments' => Order::whereIn('payment_status', ['pending', 'dp_paid'])->count(),
            'completed_orders' => Order::where('status', 'completed')->count(),
        ];

        return Inertia::render('dashboard', [
            'stats' => $stats
        ]);
    }
}