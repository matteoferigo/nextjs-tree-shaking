/* eslint import/no-extraneous-dependencies: off */
import json from '@rollup/plugin-json'
import typescript from 'rollup-plugin-typescript'
import autoExternal from 'rollup-plugin-auto-external'

module.exports = [{
  input: 'src/index.ts',
  plugins: [
    json(),
    typescript(),
    autoExternal(),
  ],
  output: { file: 'dist/index.cjs.js', format: 'cjs' },
}, {
  input: 'src/index.ts',
  preserveModules: true,
  plugins: [
    json(),
    typescript(),
    autoExternal(),
  ],
  output: { dir: 'dist/lib', format: 'es' },
}]
