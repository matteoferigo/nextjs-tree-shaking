import typescript from 'rollup-plugin-typescript'

module.exports = {
  input: 'src/index.ts',
  plugins: [
    typescript(),
  ],
  output: [
    { file: 'dist/index.cjs.js', format: 'cjs' },
    { file: 'dist/index.esm.js', format: 'es' },
  ],
}
