<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

/**
 * App\Models\WorkOrder
 *
 * @property int $id
 * @property string $work_order_number
 * @property int $order_id
 * @property string $status
 * @property string|null $start_date
 * @property string|null $target_date
 * @property string|null $completion_date
 * @property int|null $assigned_to
 * @property string|null $production_notes
 * @property array|null $progress_log
 * @property \Illuminate\Support\Carbon|null $created_at
 * @property \Illuminate\Support\Carbon|null $updated_at
 * 
 * @property-read \App\Models\Order $order
 * @property-read \App\Models\User|null $assignedUser
 * 
 * @method static \Illuminate\Database\Eloquent\Builder|WorkOrder newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|WorkOrder newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|WorkOrder query()

 * 
 * @mixin \Eloquent
 */
class WorkOrder extends Model
{
    use HasFactory;

    /**
     * The attributes that are mass assignable.
     *
     * @var list<string>
     */
    protected $fillable = [
        'work_order_number',
        'order_id',
        'status',
        'start_date',
        'target_date',
        'completion_date',
        'assigned_to',
        'production_notes',
        'progress_log',
    ];

    /**
     * The attributes that should be cast.
     *
     * @var array<string, string>
     */
    protected $casts = [
        'start_date' => 'date',
        'target_date' => 'date',
        'completion_date' => 'date',
        'progress_log' => 'array',
    ];

    /**
     * Get the order that owns the work order.
     */
    public function order(): BelongsTo
    {
        return $this->belongsTo(Order::class);
    }

    /**
     * Get the user assigned to the work order.
     */
    public function assignedUser(): BelongsTo
    {
        return $this->belongsTo(User::class, 'assigned_to');
    }
}