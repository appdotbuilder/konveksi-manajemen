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
        Schema::create('work_orders', function (Blueprint $table) {
            $table->id();
            $table->string('work_order_number')->unique()->comment('Work order number');
            $table->foreignId('order_id')->constrained()->cascadeOnDelete();
            $table->enum('status', ['pending', 'material_prep', 'cutting', 'sewing', 'finishing', 'quality_check', 'completed'])->default('pending');
            $table->date('start_date')->nullable()->comment('Production start date');
            $table->date('target_date')->nullable()->comment('Target completion date');
            $table->date('completion_date')->nullable()->comment('Actual completion date');
            $table->foreignId('assigned_to')->nullable()->constrained('users');
            $table->text('production_notes')->nullable()->comment('Production notes');
            $table->json('progress_log')->nullable()->comment('Progress tracking log');
            $table->timestamps();
            
            $table->index('work_order_number');
            $table->index('order_id');
            $table->index('status');
            $table->index('assigned_to');
            $table->index(['status', 'target_date']);
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('work_orders');
    }
};