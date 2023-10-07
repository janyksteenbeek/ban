<?php

namespace App\Console\Commands;

use App\Models\User;
use Illuminate\Console\Command;

class SendRayTestCommand extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'ban:ray-test';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Send a test message using Ray';

    /**1
     * Execute the console command.
     */
    public function handle()
    {
        ray('Hello world!');
        ray([1, 2, 3, 4, 5]);
        ray(User::factory());
    }
}
