<?php

namespace Database\Seeders;

use App\Models\Customer;
use App\Models\Order;
use App\Models\Product;
use Illuminate\Database\Seeder;

class ConvectionSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        // Create products
        Product::factory(20)->create();

        // Create customers
        Customer::factory(15)->create();

        // Create orders
        Order::factory(30)->create();
    }
}