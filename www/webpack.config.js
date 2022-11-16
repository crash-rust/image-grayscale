const HtmlWebpackPlugin = require('html-webpack-plugin');
const WasmPackPlugin = require('@wasm-tool/wasm-pack-plugin');
const path = require('path');

function resolve(dir) {
  return path.resolve(__dirname, dir);
}

module.exports = {
  entry: resolve('src/index.tsx'),
  output: {
    path: resolve('dist'),
    filename: '[name].js'
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js']
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: resolve('public/index.html'),
      inject: 'body'
    }),
    new WasmPackPlugin({
      crateDirectory: resolve('..'),
      outDir: resolve('../www/pkg')
    })
  ],
  module: {
    rules: [
      {
        test: /\.ts(x)$/,
        use: ['babel-loader', 'ts-loader']
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.less$/,
        use: ['style-loader', 'css-loader', 'less-loader']
      }
    ]
  },
  devtool: 'cheap-module-source-map',
  experiments: {
    asyncWebAssembly: true
  }
};
