/* eslint import/no-extraneous-dependencies: off */
import json from '@rollup/plugin-json'
import typescript from 'rollup-plugin-typescript'

module.exports = [{
  input: 'src/index.ts',
  plugins: [
    json(),
    typescript(),
  ],
  output: [
    { file: 'dist/index.cjs.js', format: 'cjs' },
    { file: 'dist/index.esm.js', format: 'es' },
  ],
}, {
  input: {
    Counter: 'src/Counter/index.tsx',
    Useless: 'src/Useless/index.tsx',
  },
  plugins: [
    json(),
    typescript(),
  ],
  output: { dir: 'dist/lib', format: 'cjs' },
}]
