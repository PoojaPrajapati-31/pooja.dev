import {resolve} from 'path'
import {defineConfig} from 'vite'
import viteCompression from 'vite-plugin-compression';


export default defineConfig({
    root: 'src',
    css: './src/input.css',
    build: {
        outDir: '../dist',
        emptyOutDir: true,
        rollupOptions: {
            input: {
                main:resolve(__dirname,'./src/index.html'),
            }
        }
    },
    plugins: [viteCompression({
        algorithm: 'brotliCompress',
        filter: '/\\.(js|mjs|json|css|html|png)$/i'
    })],
})
