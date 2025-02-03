import { defineConfig } from 'vite';

export default defineConfig({
    base: './', // Ensures relative paths for assets
    build: {
        outDir: 'dist', // Output folder
        assetsDir: 'assets', // Where assets are stored
        rollupOptions: {
            output: {
                manualChunks: undefined // Keeps everything in one JS file
            }
        }
    },
    server: {
        watch: {
            usePolling: true
        },
    },
    esbuild: {
        loader: "ts",
    },
});

