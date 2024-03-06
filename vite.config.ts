import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons'
import path from 'path'

// 公共自动导入组件
const PUBLIC_AUTO_IMPORTS_COMPONENTS = [{
  name: 'SvgIcon',
  from: '@/components/SvgIcon.vue'
}]

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueJsx(),
    AutoImport({
      resolvers: [ElementPlusResolver()],
      include: [
        /\.[tj]sx?$/, // .ts, .tsx, .js, .jsx
        /\.vue$/,
        /\.vue\?vue/, // .vue
        /\.md$/, // .md
      ],
      // 主要是图方便省事，少写很多的import，声明文件是auto-import.d.ts
      // 如果修改了这个配置，建议清空或删除auto-import.d.ts文件，然后重启一下vite即可
      imports: ['vue', 'vue-router', 'pinia', '@vueuse/core'],
    }),
    Components({
      resolvers: [ElementPlusResolver(), (componentName) => {
        const find = PUBLIC_AUTO_IMPORTS_COMPONENTS.find((item) => item.name === componentName)
        if (find && find.from) {
          return find
        }
      }]
    }),
    createSvgIconsPlugin({
      // 指定需要缓存的图标文件夹
      iconDirs: [path.resolve(process.cwd(), 'src/assets/icons')],
      // 指定symbolId格式
      symbolId: 'icon-[dir]-[name]',

      /**
       * 自定义插入位置
       * @default: body-last
       */
      inject: 'body-last',

      /**
       * custom dom id
       * @default: __svg__icons__dom__
       */
      customDomId: '__svg__icons__dom__',
    })
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
