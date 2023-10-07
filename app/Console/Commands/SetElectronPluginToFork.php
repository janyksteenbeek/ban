<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;

class SetElectronPluginToFork extends Command
{
    const FORK = 'git://github.com/janyksteenbeek/nativephp-electron-plugin.git';

    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'ban:set-electron-fork';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Set the NativePHP Electron plugin to Ban fork';

    /**
     * Execute the console command.
     */
    public function handle()
    {
        $this->info('Setting Electron plugin to fork...');

        $file = base_path().'/vendor/nativephp/electron/resources/js/package.json';
        $package = json_decode(file_get_contents($file), true);

        $package['dependencies']['@nativephp/electron-plugin'] = 'git://github.com/janyksteenbeek/nativephp-electron-plugin.git#add-app-port-variable';

        file_put_contents($file, json_encode($package, JSON_PRETTY_PRINT | JSON_UNESCAPED_SLASHES));

        $this->info('Electron plugin set to fork successfully ('.self::FORK.')');
    }
}
