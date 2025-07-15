import react from '@vitejs/plugin-react';
import { resolve } from 'path';
import { defineConfig } from 'vite';

export default defineConfig({
    plugins: [react()],
    server: {
        host: true,
        port: 3000,
        proxy: {
            '/api': {
                target: 'https://marathon-api.clevertec.ru',
                changeOrigin: true,
                rewrite: (path) => path.replace(/^\/api/, ''),
            },
        },
    },
    resolve: {
        alias: {
            '@public': resolve(__dirname, 'public'),
            '@shared': resolve(__dirname, 'src/shared'),
            '@features': resolve(__dirname, 'src/features'),
            '@app': resolve(__dirname, 'src/app'),
        },
    },
});
