import { resolve } from 'path';

import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import svgr from 'vite-plugin-svgr';

export default defineConfig({
    plugins: [react(), svgr()],
    css: {
        preprocessorOptions: {
            scss: {
                additionalData: `@use "variables" as *;\n@use "mixins" as *;\n`,
                loadPaths: [resolve(__dirname, 'src/styles')],
            },
        },
    },
    resolve: {
        alias: {
            '@components': resolve(__dirname, 'src/components'),
            '@pages': resolve(__dirname, 'src/pages'),
            '@styles': resolve(__dirname, 'src/styles'),
            '@assets': resolve(__dirname, 'src/assets'),
            '@data': resolve(__dirname, 'src/data'),
        },
    },
    server: {
        allowedHosts: true,
    },
});
