<?php

namespace App\Providers;

use Native\Laravel\Contracts\ProvidesPhpIni;
use Native\Laravel\Facades\Window;
use Native\Laravel\Menu\Menu;

class NativeAppServiceProvider implements ProvidesPhpIni
{
    /**
     * Executed once the native application has been booted.
     * Use this method to open windows, register global shortcuts, etc.
     */
    public function boot(): void
    {
        Menu::new()
            ->appMenu()
            ->submenu('View', Menu::new()
                ->toggleFullscreen()
            )
            ->windowMenu()
            ->submenu('About', Menu::new()
                ->link('https://github.com/janyksteenbeek/ban', 'Contribute to Ban on GitHub')
                ->separator()
                ->link('https://github.com/sponsors/janyksteenbeek', 'Sponsor @janyksteenbeek')
                ->link('https://x.com/janyksteenbeek', '@janyksteenbeek on X')
            )
            ->register();
        Window::open()
            ->width(1100)
            ->height(800);
    }

    /**
     * Return an array of php.ini directives to be set.
     */
    public function phpIni(): array
    {
        return [
        ];
    }
}
