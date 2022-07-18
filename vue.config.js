const {
    defineConfig
} = require('@vue/cli-service')
module.exports = defineConfig({
    transpileDependencies: true,
    pages: {
        index: {
            entry: './example/main.ts',
            template: 'example/index.html',
        },
    },
})