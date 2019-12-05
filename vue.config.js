module.exports = {
  outputDir: './dist',
  lintOnSave: false,
  runtimeCompiler: true,
  devServer: {
    proxy: 'http://localhost:7071',
    // proxy: process.env.SERVER_URL
  }
};
