import { defineConfig } from 'vite'
import path, { resolve } from 'path'



export default defineConfig({
    publicDir: 'public',
    define: {

    },
    base: '/music',
    build: {
        rollupOptions: {
            input: {
                main: resolve(__dirname, 'index.html'),
                personalHomePage: resolve(__dirname, 'home.html'),
                login: resolve(__dirname, 'login.html')
            },
            output: {
                chunkFileNames: 'javascript/[name]-[hash:8].js',
                entryFileNames: 'javascript/[name]-[hash:8].js',
                assetFileNames: chunkInfo => {
                    const imageReg = /(png|gif|jpeg|svg|webp)$/
                    const [, ext] = path.basename(chunkInfo.name).split('.')
                    if (ext === 'css') {
                        return `css/[name]-[hash:8].${ext}`
                    } else if (imageReg.test(ext)) {
                        return `images/[name]-[hash:8].${ext}`
                    }
                    return 'assets/[name]-[hash:8].[ext]'
                }
            }
        },
        outDir: 'dist',
        assetsDir: 'assets',
        sourcemap: true,
        emptyOutDir: true
    },
    // 配置开发服务器
    server: {
        port: 8001,
        open: true,
        proxy: {
            // 带选项写法：http://localhost:5173/api/bar -> http://jsonplaceholder.typicode.com/bar
            '/api': {
                target: 'http://121.89.213.194:5001/',
                changeOrigin: true,
                rewrite: (path) => path.replace(/^\/api/, ''),
            },
        }
    },
})