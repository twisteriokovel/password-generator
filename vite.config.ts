import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import * as path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],

  base: '/<repo>/',

  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
    }
  },

  define: {
    __VUE_I18N_FULL_INSTALL__: true,
    __VUE_I18N_LEGACY_API__: false
  },

  css: {
    preprocessorOptions: {
      scss: {
        additionalData: '@import "./src/styles/global.scss";'
      }
    }
  }
})
