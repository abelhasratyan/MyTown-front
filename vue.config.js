module.exports = {
  outputDir: './dist',
  lintOnSave: false,
  runtimeCompiler: true,
  devServer: {
    proxy: 'http://18.185.170.105:7071'
    // proxy: process.env.SERVER_URL
  }
}
