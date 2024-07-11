import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist',
    target: 'esnext',
    rollupOptions: {
      input: {
        main: 'index.html',
      }
    }
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import "src/styles/scss/style.scss";`
      }
    }
  },
  server: {
    watch: {
      paths: ['src/styles/css/**/*.css']
    }
  }
});