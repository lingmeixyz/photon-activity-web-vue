module.exports = {
  outputDir: 'dist',
  publicPath: process.env.NODE_ENV === 'production'
    ? '/photon-activity-web-vue/'
    : '/',
  css: {
    loaderOptions: {
      less: {
        javascriptEnabled: true,
      },
    },
  },
};