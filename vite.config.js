import { defineConfig } from 'vite';
import reactRefresh from '@vitejs/plugin-react-refresh';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [reactRefresh()],
  build: {
    // chunkSizeWarningLimit: 1000,
    rollupOptions: {
      output: {
        manualChunks: {
          lodash: ['lodash-es'],
          antv: ['@antv/x6'],
          jquery: ['jquery', 'jquery-mousewheel'],
          mousetrap: ['mousetrap'],
        },
      },
    },
  },
});
