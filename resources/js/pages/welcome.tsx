import { type SharedData } from '@/types';
import { Head, Link, usePage } from '@inertiajs/react';

export default function Welcome() {
    const { auth } = usePage<SharedData>().props;

    return (
        <>
            <Head title="Konveksi Management System">
                <link rel="preconnect" href="https://fonts.bunny.net" />
                <link href="https://fonts.bunny.net/css?family=instrument-sans:400,500,600" rel="stylesheet" />
            </Head>
            <div className="min-h-screen bg-gradient-to-br from-teal-50 via-cyan-50 to-blue-100 dark:from-teal-950 dark:via-cyan-950 dark:to-blue-950">
                {/* Header */}
                <header className="w-full px-6 py-4 lg:px-8">
                    <nav className="flex items-center justify-end gap-4 max-w-7xl mx-auto">
                        {auth.user ? (
                            <Link
                                href={route('dashboard')}
                                className="inline-flex items-center px-6 py-2 bg-gradient-to-r from-teal-600 to-cyan-600 text-white rounded-lg font-medium shadow-lg hover:from-teal-700 hover:to-cyan-700 transition-all duration-200 transform hover:scale-105"
                            >
                                🏢 Dashboard
                            </Link>
                        ) : (
                            <>
                                <Link
                                    href={route('login')}
                                    className="inline-flex items-center px-4 py-2 text-teal-700 dark:text-teal-300 hover:text-teal-900 dark:hover:text-teal-100 transition-colors duration-200"
                                >
                                    Masuk
                                </Link>
                                <Link
                                    href={route('register')}
                                    className="inline-flex items-center px-6 py-2 bg-gradient-to-r from-teal-600 to-cyan-600 text-white rounded-lg font-medium shadow-lg hover:from-teal-700 hover:to-cyan-700 transition-all duration-200 transform hover:scale-105"
                                >
                                    Daftar
                                </Link>
                            </>
                        )}
                    </nav>
                </header>

                {/* Main Content */}
                <main className="flex items-center justify-center min-h-[80vh] px-6 py-12">
                    <div className="max-w-6xl mx-auto text-center">
                        {/* Hero Section */}
                        <div className="mb-16">
                            <div className="mb-8">
                                <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-teal-600 via-cyan-600 to-blue-600 bg-clip-text text-transparent mb-6">
                                    🧵 Konveksi Pro
                                </h1>
                                <p className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 mb-8 max-w-3xl mx-auto">
                                    Sistem manajemen konveksi yang komprehensif untuk mengelola produk, pesanan, produksi, keuangan, dan pengiriman
                                </p>
                            </div>
                            
                            {!auth.user && (
                                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
                                    <Link
                                        href={route('register')}
                                        className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-teal-600 to-cyan-600 text-white text-lg font-semibold rounded-xl shadow-xl hover:from-teal-700 hover:to-cyan-700 transition-all duration-200 transform hover:scale-105"
                                    >
                                        🚀 Mulai Sekarang
                                    </Link>
                                    <Link
                                        href={route('login')}
                                        className="inline-flex items-center px-8 py-4 border-2 border-teal-600 text-teal-700 dark:text-teal-300 text-lg font-semibold rounded-xl hover:bg-teal-50 dark:hover:bg-teal-950 transition-all duration-200"
                                    >
                                        ✨ Masuk ke Akun
                                    </Link>
                                </div>
                            )}
                        </div>

                        {/* Features Grid */}
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
                            {/* Product Management */}
                            <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-teal-200 dark:border-teal-700">
                                <div className="text-4xl mb-4">👕</div>
                                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Manajemen Produk</h3>
                                <ul className="text-gray-600 dark:text-gray-400 space-y-2 text-left">
                                    <li>• Seragam sekolah & batik</li>
                                    <li>• Kaos sablon & jaket</li>
                                    <li>• Custom sizing</li>
                                    <li>• Manajemen atribut</li>
                                </ul>
                            </div>

                            {/* Orders & Production */}
                            <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-cyan-200 dark:border-cyan-700">
                                <div className="text-4xl mb-4">⚙️</div>
                                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Pesanan & Produksi</h3>
                                <ul className="text-gray-600 dark:text-gray-400 space-y-2 text-left">
                                    <li>• Sistem pre-order DP</li>
                                    <li>• Work order otomatis</li>
                                    <li>• Tracking produksi</li>
                                    <li>• Quality control</li>
                                </ul>
                            </div>

                            {/* Financial Management */}
                            <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-blue-200 dark:border-blue-700">
                                <div className="text-4xl mb-4">💰</div>
                                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Manajemen Keuangan</h3>
                                <ul className="text-gray-600 dark:text-gray-400 space-y-2 text-left">
                                    <li>• Multi payment method</li>
                                    <li>• QRIS & e-wallet</li>
                                    <li>• Auto invoicing</li>
                                    <li>• Financial reporting</li>
                                </ul>
                            </div>

                            {/* Material Procurement */}
                            <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-teal-200 dark:border-teal-700">
                                <div className="text-4xl mb-4">📦</div>
                                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Pengadaan Bahan</h3>
                                <ul className="text-gray-600 dark:text-gray-400 space-y-2 text-left">
                                    <li>• Stock management</li>
                                    <li>• Vendor collaboration</li>
                                    <li>• Material tracking</li>
                                    <li>• Procurement planning</li>
                                </ul>
                            </div>

                            {/* Shipping & Returns */}
                            <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-cyan-200 dark:border-cyan-700">
                                <div className="text-4xl mb-4">🚚</div>
                                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Pengiriman & Retur</h3>
                                <ul className="text-gray-600 dark:text-gray-400 space-y-2 text-left">
                                    <li>• Multi courier support</li>
                                    <li>• Tracking integration</li>
                                    <li>• Return handling</li>
                                    <li>• Delivery management</li>
                                </ul>
                            </div>

                            {/* User Management */}
                            <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-blue-200 dark:border-blue-700">
                                <div className="text-4xl mb-4">👥</div>
                                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Manajemen Tim</h3>
                                <ul className="text-gray-600 dark:text-gray-400 space-y-2 text-left">
                                    <li>• Role-based access</li>
                                    <li>• Employee payroll</li>
                                    <li>• Performance tracking</li>
                                    <li>• Vendor payments</li>
                                </ul>
                            </div>
                        </div>

                        {/* Tech Stack */}
                        <div className="bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-gray-200 dark:border-gray-700">
                            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">Teknologi Modern & Responsif</h3>
                            <div className="flex flex-wrap justify-center items-center gap-6 text-gray-600 dark:text-gray-400">
                                <span className="flex items-center gap-2">⚡ Laravel</span>
                                <span className="flex items-center gap-2">⚛️ React</span>
                                <span className="flex items-center gap-2">🎨 Tailwind CSS</span>
                                <span className="flex items-center gap-2">📱 Responsive Design</span>
                                <span className="flex items-center gap-2">🔒 Secure</span>
                            </div>
                        </div>

                        {/* Footer */}
                        <footer className="mt-16 text-center text-gray-500 dark:text-gray-400">
                            <p>Built with ❤️ for Indonesian convection businesses</p>
                        </footer>
                    </div>
                </main>
            </div>
        </>
    );
}