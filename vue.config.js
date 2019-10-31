module.exports = {
  outputDir: './../fb-back/view',
  lintOnSave: false,
  runtimeCompiler: true,
  devServer: {
    proxy: 'http://localhost:7071'
    // proxy: process.env.SERVER_URL
  }
}
