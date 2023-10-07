<?php

namespace App\Events;

use App\Http\Resources\PayloadResource;
use App\Models\Payload;
use Illuminate\Broadcasting\Channel;
use Illuminate\Broadcasting\InteractsWithSockets;
use Illuminate\Contracts\Broadcasting\ShouldBroadcast;
use Illuminate\Foundation\Events\Dispatchable;
use Illuminate\Queue\SerializesModels;

class NewPayloadEvent implements ShouldBroadcast
{
    use Dispatchable, InteractsWithSockets, SerializesModels;

    public PayloadResource $payload;

    /**
     * Create a new event instance.
     */
    public function __construct(Payload $payload)
    {
        $this->payload = new PayloadResource($payload);
    }

    /**
     * Get the channels the event should broadcast on.
     *
     * @return array<int, Channel>
     */
    public function broadcastOn(): array
    {
        return [
            new Channel('payloads'),
        ];
    }

    public function broadcastAs(): string
    {
        return 'new';
    }
}
