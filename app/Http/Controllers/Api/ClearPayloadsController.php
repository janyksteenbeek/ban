<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Payload;
use Illuminate\Http\JsonResponse;

class ClearPayloadsController extends Controller
{
    public function __invoke(): JsonResponse
    {
        Payload::query()->delete();

        return response()->json([
            'message' => 'Payloads cleared successfully!'
        ]);
    }
}
