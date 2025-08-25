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
        Schema::create('products', function (Blueprint $table) {
            $table->id();
            $table->string('name')->comment('Product name');
            $table->string('code')->unique()->comment('Product code');
            $table->enum('category', ['uniform', 'batik', 'shirt', 'jacket', 'vest', 'pants', 'accessories'])->comment('Product category');
            $table->text('description')->nullable()->comment('Product description');
            $table->decimal('base_price', 10, 2)->comment('Base price');
            $table->boolean('custom_sizing')->default(false)->comment('Supports custom sizing');
            $table->json('materials')->nullable()->comment('Available materials');
            $table->json('colors')->nullable()->comment('Available colors');
            $table->enum('status', ['active', 'inactive'])->default('active');
            $table->timestamps();
            
            $table->index('category');
            $table->index('status');
            $table->index(['status', 'created_at']);
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('products');
    }
};