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
        Schema::create('payments', function (Blueprint $table) {
            $table->id();
            $table->string('payment_number')->unique()->comment('Payment reference number');
            $table->foreignId('order_id')->constrained()->cascadeOnDelete();
            $table->decimal('amount', 12, 2)->comment('Payment amount');
            $table->enum('type', ['dp', 'settlement', 'refund'])->comment('Payment type');
            $table->enum('method', ['bank_transfer', 'cash', 'qris', 'ewallet'])->comment('Payment method');
            $table->enum('status', ['pending', 'verified', 'failed'])->default('pending');
            $table->datetime('payment_date')->comment('Payment date');
            $table->string('reference')->nullable()->comment('Payment reference or transaction ID');
            $table->text('notes')->nullable()->comment('Payment notes');
            $table->foreignId('verified_by')->nullable()->constrained('users');
            $table->datetime('verified_at')->nullable()->comment('Verification datetime');
            $table->timestamps();
            
            $table->index('payment_number');
            $table->index('order_id');
            $table->index('type');
            $table->index('method');
            $table->index('status');
            $table->index(['status', 'payment_date']);
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('payments');
    }
};