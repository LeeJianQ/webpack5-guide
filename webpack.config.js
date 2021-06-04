const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const pathname = path.resolve(__dirname, 'dist')

module.exports = {
  mode: 'development',
  entry: {
    index: './src/index.js',
    // another: './src/another-module.js',
  },
  // entry: {
  //   index: {
  //     import: './src/index.js',
  //     dependOn: 'shared',
  //   },
  //   another: {
  //     import: './src/another-module.js',
  //     dependOn: 'shared',
  //   },
  //   // 提取公共模块
  //   shared: 'lodash',
  // },
  output: {
    filename: '[name].[contenthash].js',
    path: pathname,
    // 清除 dist 下的文件
    clean: true,
    publicPath: '/',
  },
  devtool: 'inline-source-map',
  devServer: {
    contentBase: pathname,
    // 启动热更新
    hot: true,
    port: 9000,
  },
  module: {
    rules: [
      // 样式处理
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      // 图片处理
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
      // 字体处理
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: 'assets/resource',
      },
    ],
  },
  optimization: {
    runtimeChunk: 'single',
    // 将公共依赖模块提取到已有入口 chunk 中
    // splitChunks: {
    //   chunks: 'all',
    // },
    splitChunks: {
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendor',
          chunks: 'all',
        },
        // 模块标识符号
        modulesId: 'deterministic',
      },
    },
  },
  plugins: [new HtmlWebpackPlugin({ title: '管理输出' })],
}
