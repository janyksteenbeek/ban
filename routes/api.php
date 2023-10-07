<?php

use App\Http\Controllers\Api\ClearPayloadsController;
use App\Http\Controllers\Api\PayloadController;
use App\Http\Controllers\Api\ShellLinkController;
use App\Http\Controllers\Ray\AvailabilityCheckController;
use App\Http\Controllers\Ray\IncomingPayloadController;
use Illuminate\Support\Facades\Route;

Route::get('_AvailabilityCheck', AvailabilityCheckController::class);
Route::post('/', IncomingPayloadController::class);

Route::group(['prefix' => 'api'], function () {
    Route::get('/payloads', PayloadController::class);
    Route::delete('/payloads', ClearPayloadsController::class);
    Route::post('/shell-link', ShellLinkController::class);
});
