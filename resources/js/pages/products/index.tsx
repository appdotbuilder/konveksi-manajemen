import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Head, Link } from '@inertiajs/react';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Dashboard',
        href: '/dashboard',
    },
    {
        title: 'Products',
        href: '/products',
    },
];

interface Product {
    id: number;
    name: string;
    code: string;
    category: string;
    description?: string;
    base_price: number;
    custom_sizing: boolean;
    status: string;
    created_at: string;
}

interface Props {
    products: {
        data: Product[];
        current_page: number;
        last_page: number;
        per_page: number;
        total: number;
    };
    [key: string]: unknown;
}

export default function ProductsIndex({ products }: Props) {
    const categoryLabels = {
        uniform: '🎓 Seragam',
        batik: '🌸 Batik', 
        shirt: '👔 Kemeja',
        jacket: '🧥 Jaket',
        vest: '🦺 Rompi',
        pants: '👖 Celana',
        accessories: '👑 Aksesoris'
    };

    const formatPrice = (price: number) => {
        return new Intl.NumberFormat('id-ID', {
            style: 'currency',
            currency: 'IDR'
        }).format(price);
    };

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Products - Konveksi Management" />
            <div className="flex h-full flex-1 flex-col gap-6 rounded-xl p-6">
                {/* Header */}
                <div className="flex items-center justify-between">
                    <div>
                        <h1 className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                            👕 Manajemen Produk
                        </h1>
                        <p className="text-gray-600 dark:text-gray-400 mt-1">
                            Kelola semua produk konveksi Anda
                        </p>
                    </div>
                    <Link
                        href="/products/create"
                        className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg font-medium shadow-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-200"
                    >
                        ➕ Tambah Produk
                    </Link>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                    <div className="bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-950 dark:to-pink-950 rounded-xl p-4 border border-purple-200 dark:border-purple-800">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-sm font-medium text-purple-600 dark:text-purple-400">Total Produk</p>
                                <p className="text-xl font-bold text-purple-700 dark:text-purple-300">
                                    {products.total}
                                </p>
                            </div>
                            <div className="text-2xl">📦</div>
                        </div>
                    </div>

                    <div className="bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-950 dark:to-cyan-950 rounded-xl p-4 border border-blue-200 dark:border-blue-800">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-sm font-medium text-blue-600 dark:text-blue-400">Kategori</p>
                                <p className="text-xl font-bold text-blue-700 dark:text-blue-300">7</p>
                            </div>
                            <div className="text-2xl">🏷️</div>
                        </div>
                    </div>

                    <div className="bg-gradient-to-br from-green-50 to-teal-50 dark:from-green-950 dark:to-teal-950 rounded-xl p-4 border border-green-200 dark:border-green-800">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-sm font-medium text-green-600 dark:text-green-400">Aktif</p>
                                <p className="text-xl font-bold text-green-700 dark:text-green-300">
                                    {products.data.filter(p => p.status === 'active').length}
                                </p>
                            </div>
                            <div className="text-2xl">✅</div>
                        </div>
                    </div>

                    <div className="bg-gradient-to-br from-orange-50 to-red-50 dark:from-orange-950 dark:to-red-950 rounded-xl p-4 border border-orange-200 dark:border-orange-800">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-sm font-medium text-orange-600 dark:text-orange-400">Custom Size</p>
                                <p className="text-xl font-bold text-orange-700 dark:text-orange-300">
                                    {products.data.filter(p => p.custom_sizing).length}
                                </p>
                            </div>
                            <div className="text-2xl">📏</div>
                        </div>
                    </div>
                </div>

                {/* Products Table */}
                <div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 overflow-hidden">
                    <div className="overflow-x-auto">
                        <table className="w-full">
                            <thead className="bg-gray-50 dark:bg-gray-700 border-b border-gray-200 dark:border-gray-600">
                                <tr>
                                    <th className="text-left py-3 px-4 font-semibold text-gray-900 dark:text-white">Produk</th>
                                    <th className="text-left py-3 px-4 font-semibold text-gray-900 dark:text-white">Kategori</th>
                                    <th className="text-left py-3 px-4 font-semibold text-gray-900 dark:text-white">Harga Dasar</th>
                                    <th className="text-left py-3 px-4 font-semibold text-gray-900 dark:text-white">Status</th>
                                    <th className="text-left py-3 px-4 font-semibold text-gray-900 dark:text-white">Aksi</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-200 dark:divide-gray-600">
                                {products.data.map((product) => (
                                    <tr key={product.id} className="hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
                                        <td className="py-4 px-4">
                                            <div>
                                                <div className="font-medium text-gray-900 dark:text-white">
                                                    {product.name}
                                                </div>
                                                <div className="text-sm text-gray-500 dark:text-gray-400">
                                                    {product.code}
                                                    {product.custom_sizing && (
                                                        <span className="ml-2 inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300">
                                                            📏 Custom Size
                                                        </span>
                                                    )}
                                                </div>
                                            </div>
                                        </td>
                                        <td className="py-4 px-4">
                                            <span className="inline-flex items-center px-2 py-1 rounded-full text-sm font-medium bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-300">
                                                {categoryLabels[product.category as keyof typeof categoryLabels]}
                                            </span>
                                        </td>
                                        <td className="py-4 px-4">
                                            <div className="font-medium text-gray-900 dark:text-white">
                                                {formatPrice(product.base_price)}
                                            </div>
                                        </td>
                                        <td className="py-4 px-4">
                                            <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${
                                                product.status === 'active' 
                                                    ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300'
                                                    : 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300'
                                            }`}>
                                                {product.status === 'active' ? '✅ Aktif' : '❌ Nonaktif'}
                                            </span>
                                        </td>
                                        <td className="py-4 px-4">
                                            <div className="flex items-center gap-2">
                                                <Link
                                                    href={`/products/${product.id}`}
                                                    className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300"
                                                >
                                                    👁️ Lihat
                                                </Link>
                                                <Link
                                                    href={`/products/${product.id}/edit`}
                                                    className="text-green-600 hover:text-green-800 dark:text-green-400 dark:hover:text-green-300"
                                                >
                                                    ✏️ Edit
                                                </Link>
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                    {/* Empty State */}
                    {products.data.length === 0 && (
                        <div className="text-center py-12">
                            <div className="text-6xl mb-4">📦</div>
                            <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">
                                Belum ada produk
                            </h3>
                            <p className="text-gray-500 dark:text-gray-400 mb-6">
                                Mulai dengan menambahkan produk konveksi pertama Anda
                            </p>
                            <Link
                                href="/products/create"
                                className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg font-medium shadow-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-200"
                            >
                                ➕ Tambah Produk Pertama
                            </Link>
                        </div>
                    )}
                </div>

                {/* Pagination */}
                {products.last_page > 1 && (
                    <div className="flex items-center justify-between">
                        <div className="text-sm text-gray-700 dark:text-gray-300">
                            Menampilkan {((products.current_page - 1) * products.per_page) + 1} hingga {Math.min(products.current_page * products.per_page, products.total)} dari {products.total} produk
                        </div>
                        <div className="flex items-center gap-2">
                            {products.current_page > 1 && (
                                <Link
                                    href={`/products?page=${products.current_page - 1}`}
                                    className="px-3 py-1 text-sm bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded hover:bg-gray-50 dark:hover:bg-gray-700"
                                >
                                    ← Sebelumnya
                                </Link>
                            )}
                            <span className="px-3 py-1 text-sm bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-300 rounded">
                                {products.current_page}
                            </span>
                            {products.current_page < products.last_page && (
                                <Link
                                    href={`/products?page=${products.current_page + 1}`}
                                    className="px-3 py-1 text-sm bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded hover:bg-gray-50 dark:hover:bg-gray-700"
                                >
                                    Selanjutnya →
                                </Link>
                            )}
                        </div>
                    </div>
                )}
            </div>
        </AppLayout>
    );
}