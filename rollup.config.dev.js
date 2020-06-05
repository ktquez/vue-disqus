import buble from '@rollup/plugin-buble'
import resolve from '@rollup/plugin-node-resolve'
import chokidar from 'chokidar'
import { eslint } from 'rollup-plugin-eslint'
import vue from 'rollup-plugin-vue'

export default {
  input: 'src/index.js',
  watch: {
    chokidar,
    include: ['src/**']
  },
  plugins: [
    resolve(),
    eslint({
      include: './src/**'
    }),
    vue({
      css: true,
      compileTemplate: true
    }),
    buble()
  ],
  output: [
    {
      name: 'VueDisqus',
      file: 'demo/vue-disqus.js',
      format: 'umd',
      exports: 'named'
    }
  ]
}
