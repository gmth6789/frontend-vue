
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  base:'./', // เพิ่มคุณลักษณะนี้
  build: {
  },
  define: {
    'process.env': {},
  },
  resolve: {
    // กำหนดค่านามแฝงเส้นทาง
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
})
