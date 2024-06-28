<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\AlwaysOnTopRequest;
use Native\Laravel\Facades\Window;

class AlwaysOnTopController extends Controller
{
    public function __invoke(AlwaysOnTopRequest $request)
    {
        Window::alwaysOnTop($request->top);

        return response()->json([
            'success' => true,
        ]);
    }
}
