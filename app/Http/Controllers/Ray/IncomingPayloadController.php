<?php

namespace App\Http\Controllers\Ray;

use App\Events\NewPayloadEvent;
use App\Http\Controllers\Controller;
use App\Models\Payload;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;

class IncomingPayloadController extends Controller
{
    public function __invoke(Request $request)
    {
        Log::info($request->all());
        $createdPayloads = [];

        foreach ($request->payloads as $payload) {
            foreach ($payload['content']['values'] as $value) {
                $payload = Payload::create([
                    'message' => $value,
                    'uuid' => $request->uuid,
                    'type' => $payload['type'],
                    'origin' => $payload['origin']['file'],
                    'line_number' => $payload['origin']['line_number'],
                    'file' => $payload['origin']['file'],
                    'hostname' => $payload['origin']['hostname'],
                    'php_version' => $request->meta['php_version'],
                    'php_version_id' => $request->meta['php_version_id'],
                    'project_name' => $request->meta['project_name'],
                    'ray_package_version' => $request->meta['ray_package_version'],
                ]);

                event(new NewPayloadEvent($payload));
                $createdPayloads[] = $payload;
            }
        }

        return response()->json([
            'created_payloads' => count($createdPayloads),
        ]);
    }
}
