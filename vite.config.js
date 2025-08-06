import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    base: '/ssru-inter-map/',
    server: {
        port: 3000,
        open: true
    },
    build: {
        outDir: 'dist',
        sourcemap: true,
        rollupOptions: {
            output: {
                manualChunks: {
                    vendor: ['react', 'react-dom'],
                    bootstrap: ['react-bootstrap', 'bootstrap'],
                    i18n: ['react-i18next', 'i18next', 'i18next-browser-languagedetector']
                }
            }
        }
    },
    optimizeDeps: {
        include: ['react', 'react-dom', 'react-bootstrap', 'react-i18next']
    }
})