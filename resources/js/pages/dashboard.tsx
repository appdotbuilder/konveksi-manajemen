import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Head, Link } from '@inertiajs/react';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Dashboard',
        href: '/dashboard',
    },
];

interface Props {
    stats: {
        total_orders: number;
        active_orders: number;
        pending_payments: number;
        completed_orders: number;
    };
    [key: string]: unknown;
}

export default function Dashboard({ stats }: Props) {
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Dashboard - Konveksi Management" />
            <div className="flex h-full flex-1 flex-col gap-6 rounded-xl p-6">
                {/* Header */}
                <div className="flex items-center justify-between">
                    <div>
                        <h1 className="text-3xl font-bold bg-gradient-to-r from-teal-600 to-cyan-600 bg-clip-text text-transparent">
                            🏢 Dashboard Konveksi
                        </h1>
                        <p className="text-gray-600 dark:text-gray-400 mt-1">
                            Kelola bisnis konveksi Anda dengan mudah
                        </p>
                    </div>
                    <Link
                        href="/orders/create"
                        className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-teal-600 to-cyan-600 text-white rounded-lg font-medium shadow-lg hover:from-teal-700 hover:to-cyan-700 transition-all duration-200"
                    >
                        ➕ Pesanan Baru
                    </Link>
                </div>

                {/* Stats Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    <div className="bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-950 dark:to-cyan-950 rounded-xl p-6 border border-blue-200 dark:border-blue-800">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-sm font-medium text-blue-600 dark:text-blue-400">Total Pesanan</p>
                                <p className="text-2xl font-bold text-blue-700 dark:text-blue-300">
                                    {stats?.total_orders || 0}
                                </p>
                            </div>
                            <div className="text-3xl">📋</div>
                        </div>
                    </div>

                    <div className="bg-gradient-to-br from-teal-50 to-green-50 dark:from-teal-950 dark:to-green-950 rounded-xl p-6 border border-teal-200 dark:border-teal-800">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-sm font-medium text-teal-600 dark:text-teal-400">Sedang Produksi</p>
                                <p className="text-2xl font-bold text-teal-700 dark:text-teal-300">
                                    {stats?.active_orders || 0}
                                </p>
                            </div>
                            <div className="text-3xl">⚙️</div>
                        </div>
                    </div>

                    <div className="bg-gradient-to-br from-orange-50 to-red-50 dark:from-orange-950 dark:to-red-950 rounded-xl p-6 border border-orange-200 dark:border-orange-800">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-sm font-medium text-orange-600 dark:text-orange-400">Pending Bayar</p>
                                <p className="text-2xl font-bold text-orange-700 dark:text-orange-300">
                                    {stats?.pending_payments || 0}
                                </p>
                            </div>
                            <div className="text-3xl">💰</div>
                        </div>
                    </div>

                    <div className="bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-950 dark:to-emerald-950 rounded-xl p-6 border border-green-200 dark:border-green-800">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-sm font-medium text-green-600 dark:text-green-400">Selesai</p>
                                <p className="text-2xl font-bold text-green-700 dark:text-green-300">
                                    {stats?.completed_orders || 0}
                                </p>
                            </div>
                            <div className="text-3xl">✅</div>
                        </div>
                    </div>
                </div>

                {/* Quick Actions */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    {/* Management Modules */}
                    <div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 p-6">
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                            🎯 Modul Manajemen
                        </h3>
                        <div className="grid grid-cols-2 gap-3">
                            <Link
                                href="/products"
                                className="flex items-center gap-3 p-4 rounded-lg bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-950 dark:to-pink-950 border border-purple-200 dark:border-purple-800 hover:shadow-lg transition-all duration-200"
                            >
                                <span className="text-2xl">👕</span>
                                <div>
                                    <p className="font-medium text-purple-700 dark:text-purple-300">Produk</p>
                                    <p className="text-xs text-purple-600 dark:text-purple-400">Kelola produk</p>
                                </div>
                            </Link>

                            <Link
                                href="/customers"
                                className="flex items-center gap-3 p-4 rounded-lg bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-950 dark:to-cyan-950 border border-blue-200 dark:border-blue-800 hover:shadow-lg transition-all duration-200"
                            >
                                <span className="text-2xl">👥</span>
                                <div>
                                    <p className="font-medium text-blue-700 dark:text-blue-300">Pelanggan</p>
                                    <p className="text-xs text-blue-600 dark:text-blue-400">Data pelanggan</p>
                                </div>
                            </Link>

                            <Link
                                href="/orders"
                                className="flex items-center gap-3 p-4 rounded-lg bg-gradient-to-r from-teal-50 to-green-50 dark:from-teal-950 dark:to-green-950 border border-teal-200 dark:border-teal-800 hover:shadow-lg transition-all duration-200"
                            >
                                <span className="text-2xl">📋</span>
                                <div>
                                    <p className="font-medium text-teal-700 dark:text-teal-300">Pesanan</p>
                                    <p className="text-xs text-teal-600 dark:text-teal-400">Kelola pesanan</p>
                                </div>
                            </Link>

                            <Link
                                href="/materials"
                                className="flex items-center gap-3 p-4 rounded-lg bg-gradient-to-r from-orange-50 to-red-50 dark:from-orange-950 dark:to-red-950 border border-orange-200 dark:border-orange-800 hover:shadow-lg transition-all duration-200"
                            >
                                <span className="text-2xl">📦</span>
                                <div>
                                    <p className="font-medium text-orange-700 dark:text-orange-300">Bahan</p>
                                    <p className="text-xs text-orange-600 dark:text-orange-400">Stock bahan</p>
                                </div>
                            </Link>
                        </div>
                    </div>

                    {/* Production & Operations */}
                    <div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 p-6">
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                            🏭 Produksi & Operasi
                        </h3>
                        <div className="grid grid-cols-2 gap-3">
                            <Link
                                href="/work-orders"
                                className="flex items-center gap-3 p-4 rounded-lg bg-gradient-to-r from-indigo-50 to-purple-50 dark:from-indigo-950 dark:to-purple-950 border border-indigo-200 dark:border-indigo-800 hover:shadow-lg transition-all duration-200"
                            >
                                <span className="text-2xl">⚙️</span>
                                <div>
                                    <p className="font-medium text-indigo-700 dark:text-indigo-300">Work Order</p>
                                    <p className="text-xs text-indigo-600 dark:text-indigo-400">Produksi</p>
                                </div>
                            </Link>

                            <Link
                                href="/payments"
                                className="flex items-center gap-3 p-4 rounded-lg bg-gradient-to-r from-green-50 to-teal-50 dark:from-green-950 dark:to-teal-950 border border-green-200 dark:border-green-800 hover:shadow-lg transition-all duration-200"
                            >
                                <span className="text-2xl">💰</span>
                                <div>
                                    <p className="font-medium text-green-700 dark:text-green-300">Pembayaran</p>
                                    <p className="text-xs text-green-600 dark:text-green-400">Keuangan</p>
                                </div>
                            </Link>

                            <Link
                                href="/shipments"
                                className="flex items-center gap-3 p-4 rounded-lg bg-gradient-to-r from-cyan-50 to-blue-50 dark:from-cyan-950 dark:to-blue-950 border border-cyan-200 dark:border-cyan-800 hover:shadow-lg transition-all duration-200"
                            >
                                <span className="text-2xl">🚚</span>
                                <div>
                                    <p className="font-medium text-cyan-700 dark:text-cyan-300">Pengiriman</p>
                                    <p className="text-xs text-cyan-600 dark:text-cyan-400">Tracking</p>
                                </div>
                            </Link>

                            <Link
                                href="/reports"
                                className="flex items-center gap-3 p-4 rounded-lg bg-gradient-to-r from-pink-50 to-rose-50 dark:from-pink-950 dark:to-rose-950 border border-pink-200 dark:border-pink-800 hover:shadow-lg transition-all duration-200"
                            >
                                <span className="text-2xl">📊</span>
                                <div>
                                    <p className="font-medium text-pink-700 dark:text-pink-300">Laporan</p>
                                    <p className="text-xs text-pink-600 dark:text-pink-400">Analytics</p>
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>

                {/* Recent Activity */}
                <div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 p-6">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                        📈 Aktivitas Terbaru
                    </h3>
                    <div className="space-y-3">
                        <div className="flex items-center gap-4 p-3 rounded-lg bg-gray-50 dark:bg-gray-700">
                            <span className="text-2xl">📋</span>
                            <div className="flex-1">
                                <p className="font-medium text-gray-900 dark:text-white">Pesanan baru dari PT. Sekolah Indonesia</p>
                                <p className="text-sm text-gray-500 dark:text-gray-400">2 menit yang lalu</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-4 p-3 rounded-lg bg-gray-50 dark:bg-gray-700">
                            <span className="text-2xl">💰</span>
                            <div className="flex-1">
                                <p className="font-medium text-gray-900 dark:text-white">Pembayaran DP diterima - Order #KV001</p>
                                <p className="text-sm text-gray-500 dark:text-gray-400">15 menit yang lalu</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-4 p-3 rounded-lg bg-gray-50 dark:bg-gray-700">
                            <span className="text-2xl">✅</span>
                            <div className="flex-1">
                                <p className="font-medium text-gray-900 dark:text-white">Produksi selesai - Work Order #WO001</p>
                                <p className="text-sm text-gray-500 dark:text-gray-400">1 jam yang lalu</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </AppLayout>
    );
}