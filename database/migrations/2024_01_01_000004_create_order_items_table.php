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
        Schema::create('order_items', function (Blueprint $table) {
            $table->id();
            $table->foreignId('order_id')->constrained()->cascadeOnDelete();
            $table->foreignId('product_id')->constrained()->cascadeOnDelete();
            $table->integer('quantity')->comment('Item quantity');
            $table->decimal('unit_price', 10, 2)->comment('Unit price');
            $table->decimal('total_price', 10, 2)->comment('Total item price');
            $table->string('material')->nullable()->comment('Selected material');
            $table->string('color')->nullable()->comment('Selected color');
            $table->json('custom_sizes')->nullable()->comment('Custom sizing details');
            $table->text('specifications')->nullable()->comment('Additional specifications');
            $table->timestamps();
            
            $table->index('order_id');
            $table->index('product_id');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('order_items');
    }
};