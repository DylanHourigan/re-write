const { defineConfig } = require('@vue/cli-service')
const path = require('path');

module.exports = defineConfig({
  transpileDependencies: true,
  publicPath: process.env.NODE_ENV === 'production' ? '/re-write/' : '/',
  configureWebpack: {
    resolve: {
      alias: {
        '@server': path.resolve(__dirname, 'server'),
      },
    },
  },
});
