import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import dts from 'vite-plugin-dts'

import { resolve } from 'path'

const CESIUM_BASE_URL = 'cesium/'

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'three-vue'
    },
    rollupOptions: {
      // make sure to externalize deps that shouldn't be bundled
      // into your library
      external: ['vue'],
      output: {
        // Provide global variables to use in the UMD build
        // for externalized deps
        globals: {
          vue: 'Vue',
          cesium: 'Cesium'
        }
      }
    }
  },
  plugins: [
    vue(),
    vueJsx(),
    dts({
      // rollupTypes: true,
      insertTypesEntry: true,
      include: ['src']
    })
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  define: {
    CESIUM_BASE_URL: JSON.stringify(CESIUM_BASE_URL)
  }
})
