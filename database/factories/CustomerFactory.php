<?php

namespace Database\Factories;

use App\Models\Customer;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Customer>
 */
class CustomerFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var class-string<\App\Models\Customer>
     */
    protected $model = Customer::class;

    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        $companies = [
            'PT. Konveksi Indonesia',
            'CV. Seragam Nusantara', 
            'SDN 01 Jakarta',
            'SMP Negeri 5',
            'SMA Budi Utomo',
            'SMK Teknologi',
            'Universitas Pancasila',
            'Yayasan Pendidikan Harapan',
            'Sekolah Islam Terpadu',
            'Pondok Pesantren Al-Ikhlas'
        ];

        $cities = [
            'Jakarta', 'Bandung', 'Surabaya', 'Medan', 'Semarang',
            'Palembang', 'Makassar', 'Tangerang', 'Depok', 'Bekasi'
        ];

        $regions = ['Jakarta', 'Jabar', 'Jateng', 'Jatim', 'Sumut', 'Sumsel'];

        return [
            'name' => $this->faker->name,
            'email' => $this->faker->unique()->safeEmail,
            'phone' => $this->faker->phoneNumber,
            'company' => $this->faker->randomElement($companies),
            'address' => $this->faker->address,
            'city' => $this->faker->randomElement($cities),
            'region' => $this->faker->randomElement($regions),
            'notes' => $this->faker->optional(0.3)->sentence,
            'status' => $this->faker->randomElement(['active', 'active', 'active', 'inactive'])
        ];
    }
}