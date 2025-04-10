import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    // Увеличение лимита для предупреждений о размере чанков
    chunkSizeWarningLimit: 1000, // 1 MB, например

    // Ручная настройка разделения чанков
    rollupOptions: {
      output: {
        manualChunks(id) {
          // Разделяем все зависимости из node_modules в отдельный чанк
          if (id.includes('node_modules')) {
            return 'vendor'; // Имя чанка для всех библиотек из node_modules
          }
        },
      },
    },
  },
})
