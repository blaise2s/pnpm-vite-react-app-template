import react from '@vitejs/plugin-react-swc';
import { defineConfig } from 'vite';
import { coverageConfigDefaults } from 'vitest/config';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    coverage: {
      exclude: [
        'src/main.tsx',
        'lint-staged.config.mjs',
        ...coverageConfigDefaults.exclude,
      ],
    },
    browser: {
      enabled: true,
      provider: 'playwright',
      instances: [{ browser: 'chromium' }],
    },
  },
  build: {
    sourcemap: true,
    minify: 'terser',
    cssCodeSplit: true,
    rollupOptions: {
      output: {
        manualChunks: {
          'emotion-vendor': ['@emotion/react', '@emotion/styled'],
          'mui-vendor': ['@mui/material'],
          lodash: ['lodash'],
          'react-vendor': ['react', 'react-dom'],
        },
      },
    },
  },
  server: {
    port: 3000,
    open: true,
  },
});
