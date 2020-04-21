module.exports = {
  pwa: {
    iconPaths: {
      favicon32: '/assets/ico/favicon.ico',
      favicon16: '/assets/ico/favicon.ico',
      appleTouchIcon: '/assets/ico/favicon.ico',
      maskIcon: '/assets/ico/favicon.ico',
      msTileImage: '/assets/ico/favicon.ico'
    },
  },
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