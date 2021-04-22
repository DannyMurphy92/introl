const path = require('path');
const HtmlPlugin = require('html-webpack-plugin')
const VueLoaderPlugin = require('vue-loader/lib/plugin');

const webpackConfig = {
  entry: './src/web-client/index.ts',
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'build.js',
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src/web-client'),
      vue$: 'vue/dist/vue.esm.js',
    },
    extensions: ['.ts', '.js', '.vue', '.json'],
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        use: [
          {
            loader: 'vue-loader',
            options: {
              compilerOptions: {
                preserveWhitespace: false,
              },
            },
          },
        ],
      },
      {
        test: /\.(j|t)s$/,
        include: [path.resolve(__dirname, 'src/web-client')],
        use: [
          {
            loader: 'cache-loader',
            options: {
              cacheDirectory: path.resolve(__dirname, 'node_modules/.cache', 'ts-cache-loader'),
            },
          },
          {
            loader: 'ts-loader',
            options: {
              appendTsSuffixTo: [/\.vue$/],
              transpileOnly: true,
              happyPackMode: false,
              onlyCompileBundledFiles: true,
            },
          },
        ],
      },
      {
        test: /\.scss$/,
        include: [path.resolve(__dirname, 'src/web-client')],
        use: [
          {
            loader: 'vue-style-loader',
            options: { sourceMap: true, shadowMode: false },
          },
          {
            loader: 'css-loader',
            options: { sourceMap: true, importLoaders: 2 },
          },
          {
            loader: 'postcss-loader',
            options: { sourceMap: true },
          },
          {
            loader: 'sass-loader',
            options: { sourceMap: true },
          },
          {
            loader: 'sass-resources-loader',
            options: {
              resources: [
                './src/web-client/styles/functions/_layout.scss',
                './src/web-client/styles/variables/_all.scss',
              ],
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new VueLoaderPlugin(),
    new HtmlPlugin({
      template: 'index.html',
      chunksSortMode: 'dependency',
    }),
  ],
};

module.exports = webpackConfig;
