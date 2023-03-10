import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vuetify, { transformAssetUrls } from 'vite-plugin-vuetify'

const baseUrl = process.env.NODE_ENV === 'production' ? `/${process.env.CI_PROJECT_NAME}/` : '/'

// https://vitejs.dev/config/
export default defineConfig({
  base: baseUrl,
  // настройка папки для энв
  envDir: './env',
  envPrefix: 'VUE',
  plugins: [
    // vue(),
    vue({
      // isProduction: true,
      template: { transformAssetUrls }
    }),
    // https://github.com/vuetifyjs/vuetify-loader/tree/next/packages/vite-plugin
    vuetify({
      autoImport: true
    })
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import "@/assets/scss/variables.scss";`
      }
    }
  }
})
