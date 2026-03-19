import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],
  css: {
    preprocessorOptions: {
      scss: {
        api: 'modern-compiler',
        additionalData: `@use "@/styles/variables" as *;\n@use "@/styles/mixins" as *;`,
      },
    },
  },
  resolve: {
    alias: {
      '@': '/src',
    },
  },
})
