module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? '/suyuan.live-preview/'
    : '/',
  css: {
    loaderOptions: {
      css: {},
      postcss: {
        plugins: [
          require('postcss-px2rem')({
            remUnit: 75
          })
        ]
      }
    }
  }
}
