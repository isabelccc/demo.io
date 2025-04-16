import { defineConfig } from 'vite';

export default defineConfig({
  // Base path for GitHub Pages
  base: './',
  
  // Build options
  build: {
    // Output directory
    outDir: 'dist',
    
    // Enable minification
    minify: 'terser',
    
    // CSS optimization
    cssMinify: true,
    
    // Enable gzip compression
    reportCompressedSize: true,
    
    // Split chunks for better caching
    rollupOptions: {
      output: {
        manualChunks: undefined,
      },
    },
  },
  
  // Server options for development
  server: {
    port: 3000,
    open: true,
    host: true,
  },
}); 