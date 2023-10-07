<?php

namespace App\Http\Controllers\Ray;

use App\Http\Controllers\Controller;
use Illuminate\Http\Response;

class AvailabilityCheckController extends Controller
{
    public function __invoke(): Response
    {
        return response('Ban server is up and running!', 404);
    }
}
