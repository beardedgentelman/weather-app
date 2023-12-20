const { defineConfig } = require('@vue/cli-service');

module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    proxy: {
      '/dashboard': {
        target: 'https://maps.googleapis.com',
        changeOrigin: true,
        pathRewrite: {
          '^/maps': '',
        },
      },
    },
  },
});
