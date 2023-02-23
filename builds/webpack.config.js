const path = require('path');
const { VueLoaderPlugin } = require('vue-loader')
module.exports = {
    mode: 'production',
    entry: path.resolve(__dirname, '../packages/zy-ui/index.ts'),
    output: {
        path: path.resolve(__dirname, '../lib'),
        filename: 'index.js',
        libraryTarget: 'umd',// 支持commonjs和amd 不支持es6 可直接在浏览器使用
        library: 'zy-ui',
    },
    externals: { // 排除vue打包
        vue: {
            root: 'Vue',
            commonjs: 'vue',
            commonjs2: 'vue',
        },
    },
    module: {
        rules: [{
                test: /\.vue$/,
                use: 'vue-loader',
            },
            {
                test: /\.(ts|js)x?$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
            },
        ]
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.json'],
    },
    plugins: [
        new VueLoaderPlugin(),
    ]
}