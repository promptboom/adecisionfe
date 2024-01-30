const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: [
    'vuetify'
  ],
  devServer: {
    host: '127.0.0.1',
    port: 8001,
    open: true,
  }
})
