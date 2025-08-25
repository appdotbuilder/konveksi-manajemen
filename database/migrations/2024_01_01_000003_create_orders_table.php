<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('orders', function (Blueprint $table) {
            $table->id();
            $table->string('order_number')->unique()->comment('Order number');
            $table->foreignId('customer_id')->constrained()->cascadeOnDelete();
            $table->decimal('total_amount', 12, 2)->comment('Total order amount');
            $table->decimal('dp_amount', 12, 2)->comment('Down payment amount');
            $table->decimal('remaining_amount', 12, 2)->comment('Remaining payment amount');
            $table->decimal('discount_amount', 12, 2)->default(0)->comment('Discount amount');
            $table->enum('status', ['draft', 'confirmed', 'in_production', 'completed', 'delivered', 'cancelled'])->default('draft');
            $table->enum('payment_status', ['pending', 'dp_paid', 'fully_paid'])->default('pending');
            $table->date('order_date')->comment('Order date');
            $table->date('due_date')->nullable()->comment('Expected completion date');
            $table->text('notes')->nullable()->comment('Order notes');
            $table->timestamps();
            
            $table->index('order_number');
            $table->index('customer_id');
            $table->index('status');
            $table->index('payment_status');
            $table->index(['status', 'created_at']);
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('orders');
    }
};