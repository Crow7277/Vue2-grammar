const { defineConfig } = require('@vue/cli-service');
module.exports = defineConfig({
    transpileDependencies: true,
    lintOnSave: false, //关闭语法检查
    // 开启代理服务器（方式1）
    // devServer: {
    //     proxy: 'http://localhost:5000',
    // },
    // 开启代理服务器（方式2）
    devServer: {
        proxy: {
            '/api': {
                target: 'http://localhost:5000',
                pathRewrite: { '^/api': '' },
                ws: true,//用于支持websocket
                changeOrigin: true,
            },
            '/foo': {
                target: 'http://localhost:5001',
                pathRewrite: { '^/foo': '' },
                ws: true,
                changeOrigin: true,
            },
        },
    },
});