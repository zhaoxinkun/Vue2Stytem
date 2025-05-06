const {defineConfig} = require('@vue/cli-service')
module.exports = defineConfig({
    transpileDependencies: true,
    devServer: {
        port: 8888,
        host: '0.0.0.0',
        open: true,
    }
})
