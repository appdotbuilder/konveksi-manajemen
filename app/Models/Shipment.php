<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

/**
 * App\Models\Shipment
 *
 * @property int $id
 * @property string $tracking_number
 * @property int $order_id
 * @property string $shipping_method
 * @property string|null $courier_name
 * @property string|null $receipt_number
 * @property string $shipping_address
 * @property float $shipping_cost
 * @property string $status
 * @property string|null $shipped_date
 * @property string|null $delivered_date
 * @property string|null $delivery_notes
 * @property \Illuminate\Support\Carbon|null $created_at
 * @property \Illuminate\Support\Carbon|null $updated_at
 * 
 * @property-read \App\Models\Order $order
 * 
 * @method static \Illuminate\Database\Eloquent\Builder|Shipment newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|Shipment newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|Shipment query()

 * 
 * @mixin \Eloquent
 */
class Shipment extends Model
{
    use HasFactory;

    /**
     * The attributes that are mass assignable.
     *
     * @var list<string>
     */
    protected $fillable = [
        'tracking_number',
        'order_id',
        'shipping_method',
        'courier_name',
        'receipt_number',
        'shipping_address',
        'shipping_cost',
        'status',
        'shipped_date',
        'delivered_date',
        'delivery_notes',
    ];

    /**
     * The attributes that should be cast.
     *
     * @var array<string, string>
     */
    protected $casts = [
        'shipping_cost' => 'decimal:2',
        'shipped_date' => 'date',
        'delivered_date' => 'date',
    ];

    /**
     * Get the order that owns the shipment.
     */
    public function order(): BelongsTo
    {
        return $this->belongsTo(Order::class);
    }
}