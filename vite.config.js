import {defineConfig} from 'vite';
import laravel from 'laravel-vite-plugin';

export default defineConfig({
    plugins: [
        laravel({
            input: ['resources/css/app.css', 'resources/js/main.tsx'],
            refresh: true,
        }),
        // react()
    ],
    esbuild: {
        jsxInject: `import React from 'react'`
    }
});
