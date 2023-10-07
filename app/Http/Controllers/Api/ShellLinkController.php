<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\ShellLinkRequest;
use Native\Laravel\Facades\Shell;

class ShellLinkController extends Controller
{
    public function __invoke(ShellLinkRequest $request)
    {
        Shell::openExternal($request->get('uri'));

        return response()->json([
            'message' => 'Shell link opened',
        ]);
    }
}
