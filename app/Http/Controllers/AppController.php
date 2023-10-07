<?php

namespace App\Http\Controllers;

use Illuminate\View\View;

class AppController extends Controller
{
    public function __invoke(): View
    {
        return view('app');
    }
}
