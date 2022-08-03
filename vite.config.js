import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import path from 'path'


// https://vitejs.dev/config/n
export default defineConfig({
  // server:{
  //   hmr:true,
  //   chainWebpack: (config) => {
  //     config.resolve.symlinks(true) // 修复热更新失效
  //   }
  // },
  plugins: [
    vue(),
    // element plas 按需加载
    AutoImport({
      resolvers: [ElementPlusResolver()],
    }),
    Components({
      resolvers: [ElementPlusResolver()],
    }),
  ],
  // 打包配置
  build: {
    target: 'modules',
    outDir: 'dist', //指定输出路径
    assetsDir: 'assets', // 指定生成静态资源的存放路径
    minify: 'terser' // 混淆器，terser构建后文件体积更小
  },
  resolve: {
    // 配置路径别名
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@api': path.resolve(__dirname, './src/api'),
      '@assets': path.resolve(__dirname, './src/assets'),
      '@components': path.resolve(__dirname, './src/components'),
      '@request': path.resolve(__dirname, './src/request'),
      '@router': path.resolve(__dirname, './src/router'),
      '@store': path.resolve(__dirname, './src/store'),
      '@utils': path.resolve(__dirname, './src/utils'),
      '@view': path.resolve(__dirname, './src/view'),
      '@layout': path.resolve(__dirname, './src/layout'),
    }
  },
  css: {
    preprocessorOptions: {
      less: {
        modifyVars: {
          hack: `true; @import (reference) "${path.resolve("src/assets/styles/base.less")}";`,
        },
        javascriptEnabled: true,
      },
    },
  },
})