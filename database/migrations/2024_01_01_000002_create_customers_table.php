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
        Schema::create('customers', function (Blueprint $table) {
            $table->id();
            $table->string('name')->comment('Customer name');
            $table->string('email')->unique()->comment('Customer email');
            $table->string('phone')->nullable()->comment('Customer phone');
            $table->string('company')->nullable()->comment('Company or school name');
            $table->text('address')->nullable()->comment('Customer address');
            $table->string('city')->nullable()->comment('Customer city');
            $table->string('region')->nullable()->comment('Customer region for pricing');
            $table->text('notes')->nullable()->comment('Additional notes');
            $table->enum('status', ['active', 'inactive'])->default('active');
            $table->timestamps();
            
            $table->index('name');
            $table->index('email');
            $table->index('status');
            $table->index('region');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('customers');
    }
};