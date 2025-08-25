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
        Schema::create('shipments', function (Blueprint $table) {
            $table->id();
            $table->string('tracking_number')->unique()->comment('Shipment tracking number');
            $table->foreignId('order_id')->constrained()->cascadeOnDelete();
            $table->enum('shipping_method', ['private_courier', 'jne', 'jnt', 'tiki', 'pickup'])->comment('Shipping method');
            $table->string('courier_name')->nullable()->comment('Courier service name');
            $table->string('receipt_number')->nullable()->comment('Shipping receipt number');
            $table->text('shipping_address')->comment('Shipping address');
            $table->decimal('shipping_cost', 10, 2)->default(0)->comment('Shipping cost');
            $table->enum('status', ['preparing', 'shipped', 'in_transit', 'delivered', 'returned'])->default('preparing');
            $table->date('shipped_date')->nullable()->comment('Shipped date');
            $table->date('delivered_date')->nullable()->comment('Delivered date');
            $table->text('delivery_notes')->nullable()->comment('Delivery notes');
            $table->timestamps();
            
            $table->index('tracking_number');
            $table->index('order_id');
            $table->index('shipping_method');
            $table->index('status');
            $table->index(['status', 'shipped_date']);
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('shipments');
    }
};