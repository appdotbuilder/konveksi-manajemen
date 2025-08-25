<?php

namespace Database\Factories;

use App\Models\Customer;
use App\Models\Order;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Order>
 */
class OrderFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var class-string<\App\Models\Order>
     */
    protected $model = Order::class;

    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        $totalAmount = $this->faker->numberBetween(1000000, 10000000);
        $dpPercentage = $this->faker->numberBetween(50, 70) / 100;
        $dpAmount = $totalAmount * $dpPercentage;
        $remainingAmount = $totalAmount - $dpAmount;
        $discountAmount = $this->faker->optional(0.3)->numberBetween(0, (int)($totalAmount * 0.1)) ?: 0;

        $orderDate = $this->faker->dateTimeBetween('-3 months', 'now');
        $dueDate = $this->faker->dateTimeBetween($orderDate, '+1 month');

        return [
            'order_number' => 'KV' . $this->faker->unique()->numerify('####'),
            'customer_id' => Customer::factory(),
            'total_amount' => $totalAmount,
            'dp_amount' => $dpAmount,
            'remaining_amount' => $remainingAmount,
            'discount_amount' => $discountAmount,
            'status' => $this->faker->randomElement(['draft', 'confirmed', 'in_production', 'completed', 'delivered', 'cancelled']),
            'payment_status' => $this->faker->randomElement(['pending', 'dp_paid', 'fully_paid']),
            'order_date' => $orderDate,
            'due_date' => $dueDate,
            'notes' => $this->faker->optional(0.4)->sentence(10),
        ];
    }
}