<?php

namespace Database\Factories;

use App\Models\Product;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Product>
 */
class ProductFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var class-string<\App\Models\Product>
     */
    protected $model = Product::class;

    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        $categories = ['uniform', 'batik', 'shirt', 'jacket', 'vest', 'pants', 'accessories'];
        $category = $this->faker->randomElement($categories);
        
        $productNames = [
            'uniform' => ['Seragam Sekolah Putih', 'Seragam OSIS', 'Seragam Pramuka'],
            'batik' => ['Batik Sogan', 'Batik Parang', 'Batik Modern'],
            'shirt' => ['Kemeja Putih', 'Kemeja Kantor', 'Kemeja Casual'],
            'jacket' => ['Jaket Sekolah', 'Jaket Almamater', 'Jaket Custom'],
            'vest' => ['Rompi Formal', 'Rompi Sekolah', 'Rompi Custom'],
            'pants' => ['Celana Seragam', 'Celana Formal', 'Celana Sekolah'],
            'accessories' => ['Topi Sekolah', 'Dasi', 'Ikat Pinggang', 'Tas Sekolah']
        ];
        
        $name = $this->faker->randomElement($productNames[$category]);
        
        return [
            'name' => $name,
            'code' => strtoupper($this->faker->bothify('??###')),
            'category' => $category,
            'description' => $this->faker->sentence(10),
            'base_price' => $this->faker->numberBetween(50000, 500000),
            'custom_sizing' => $this->faker->boolean(30),
            'materials' => $this->faker->randomElements(['Katun', 'Polyester', 'Cotton Combed', 'Drill', 'Oxford'], random_int(1, 3)),
            'colors' => $this->faker->randomElements(['Putih', 'Biru', 'Merah', 'Hijau', 'Hitam', 'Abu-abu'], random_int(1, 4)),
            'status' => $this->faker->randomElement(['active', 'active', 'active', 'inactive']) // 75% active
        ];
    }
}