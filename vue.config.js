const { defineConfig } = require('@vue/cli-service')
const path = require('path');

module.exports = defineConfig({
  transpileDependencies: true,
  publicPath: process.env.NODE_ENV === 'Production' ? '/re-write/' : '/',
  configureWebpack: {
    resolve: {
      alias: {
        '@server': path.resolve(__dirname, 'server'),
        '@assets': path.resolve(__dirname, 'src/assets'),
      },
    },
  },
});
