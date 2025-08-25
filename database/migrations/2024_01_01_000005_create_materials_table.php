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
        Schema::create('materials', function (Blueprint $table) {
            $table->id();
            $table->string('name')->comment('Material name');
            $table->string('code')->unique()->comment('Material code');
            $table->string('type')->comment('Material type');
            $table->string('color')->comment('Material color');
            $table->decimal('cost_per_unit', 8, 2)->comment('Cost per unit');
            $table->string('unit')->default('meter')->comment('Unit of measurement');
            $table->decimal('stock_quantity', 8, 2)->default(0)->comment('Current stock quantity');
            $table->decimal('minimum_stock', 8, 2)->default(0)->comment('Minimum stock level');
            $table->string('supplier')->nullable()->comment('Material supplier');
            $table->enum('status', ['active', 'inactive'])->default('active');
            $table->timestamps();
            
            $table->index('name');
            $table->index('type');
            $table->index('color');
            $table->index('status');
            $table->index(['status', 'stock_quantity']);
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('materials');
    }
};