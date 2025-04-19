import react from '@vitejs/plugin-react-swc';
import { defineConfig } from 'vite';
// TODO: Remove when issue is resolved, couldn't find a good bug for tracking progress
// eslint-disable-next-line import/no-unresolved
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
          lodash: ['lodash'],
          // 'mui-vendor': ['@mui/material', '@mui/icons-material'],
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
