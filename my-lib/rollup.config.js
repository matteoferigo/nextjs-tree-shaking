/* eslint import/no-extraneous-dependencies: off */
import json from '@rollup/plugin-json'
import typescript from 'rollup-plugin-typescript'
import autoExternal from 'rollup-plugin-auto-external'

module.exports = {
  input: 'src/index.ts',
  plugins: [
    json(),
    typescript(),
    autoExternal(),
  ],
  output: [
    { file: 'dist/index.cjs.js', format: 'cjs' },
    { file: 'dist/index.esm.js', format: 'es' },
  ],
}
