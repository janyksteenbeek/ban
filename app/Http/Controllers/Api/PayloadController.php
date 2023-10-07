<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Resources\PayloadResource as PayloadResource;
use App\Models\Payload;
use Illuminate\Http\Resources\Json\AnonymousResourceCollection;

class PayloadController extends Controller
{
    public function __invoke(): AnonymousResourceCollection
    {
        return PayloadResource::collection(Payload::orderBy('created_at', 'desc')->get());
    }
}
