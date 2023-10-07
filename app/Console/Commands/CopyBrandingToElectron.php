<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;

class CopyBrandingToElectron extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'ban:branding';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Copy Ban branding to Electron';

    /**
     * Execute the console command.
     */
    public function handle()
    {
        $this->info('Copying branding to Electron...');

        $iconPath = base_path().'/branding/icon.png';

        collect([
            base_path().'/vendor/nativephp/electron/resources/js/build/icon.png',
            base_path().'/vendor/nativephp/electron/resources/js/resources/icon.png',
        ])->each(function ($file) use ($iconPath) {
            copy($iconPath, $file);
            $this->info('Copied icon to '.$file.' successfully!');
        });

        $this->info('Branding copied successfully!');
    }
}
