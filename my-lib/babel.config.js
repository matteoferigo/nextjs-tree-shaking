module.exports = {
  presets: [
    ['@babel/preset-env', { modules: process.env.ESM === undefined ? 'auto' : false }],
    '@babel/preset-react',
    '@babel/preset-typescript',
  ],
}
