const { resolve } = require('path')
const { defineConfig } = require('vite')

module.exports = defineConfig({
  base: '',
  root: resolve(__dirname, 'src'),
  build: {
    outDir: resolve(__dirname, 'dist'),
    rollupOptions: {
      input: {
        // main: resolve(__dirname, 'src/index.html'),
        main: resolve(__dirname, 'src/why-evernote/index.html')
      }
    }
  }
})