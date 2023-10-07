<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class PayloadResource extends JsonResource
{
    /**
     * Transform the resource collection into an array.
     *
     * @return array<int|string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            'uuid' => $this->uuid,
            'message' => $this->message,
            'type' => $this->type,
            'date' => $this->created_at,
            'origin' => [
                'file' => $this->file,
                'line_number' => $this->line_number,
                'hostname' => $this->hostname,
                'php_version' => $this->php_version,
            ],
        ];
    }
}
