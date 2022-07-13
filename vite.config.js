const { resolve } = require('path')
const { defineConfig } = require('vite')

module.exports = defineConfig({
  base: '',
  root: resolve(__dirname, 'src'),
  build: {
    outDir: resolve(__dirname, 'dist'),
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'src/index.html'),
        // about: resolve(__dirname, 'src/about/index.html'),
        // blog: resolve(__dirname, 'src/blog.html')
      }
    }
  }
})