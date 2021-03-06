const path = require('path')
const webpack = require('webpack')
const clientRoot = path.resolve(__dirname, '../src/client')
const nodeModules = path.resolve(__dirname, '../node_modules')
const fontAwesome = path.join(nodeModules, 'font-awesome')
const webModules = path.resolve(__dirname, '../web_modules')
const weatherIcons = path.join(webModules, 'weather-icons')
// const ExtractTextPlugin = require('extract-text-webpack-plugin')

const config = {
  context: clientRoot,
  entry: [
    'webpack-hot-middleware/client?path=/__webpack_hmr&timeout=20000',
    './main.js'
  ],
  output: {
    path: path.resolve(__dirname, '../dist/public/client'),
    publicPath: '/client/',
    filename: '[name].js'
  },
  resolve: {
    alias: {
      bootstrap: 'dendro-bootstrap/dist',
      jquery: 'jquery/src/jquery',
      tether: 'tether/dist/js/tether'
    },
    extensions: ['', '.js', '.vue']
  },
  module: {
    preLoaders: [
      {
        test: /\.vue$/,
        loader: 'eslint',
        include: clientRoot
      },
      {
        test: /\.js$/,
        loader: 'eslint',
        include: clientRoot
      }
    ],
    loaders: [
      {
        test: /\.vue$/,
        loader: 'vue'
      },
      {
        test: /\.js$/,
        loader: 'babel',
        include: clientRoot
        // NOTE: Vue loader doesn't respect the presets here, so we must resort to .babelrc
        // query: {
        //   presets: ['es2015'],
        //   // The 'transform-runtime' plugin tells babel to require the runtime
        //   // instead of inlining it
        //   plugins: ['transform-runtime']
        // }
      },
      // Embed stylesheets into a webpack javascript bundle
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader'
      },
      {
        test: /\.(gif|jpe?g|png|svg)(\?.*)?$/,
        loader: 'url',
        include: [clientRoot, fontAwesome, weatherIcons],
        query: {
          limit: 10000,
          name: 'assets/images/[name].[hash:7].[ext]'
        }
      },
      {
        test: /\.(eot|ttf|woff(2)?)(\?.*)?$/,
        loader: 'url',
        include: [clientRoot, fontAwesome, weatherIcons],
        query: {
          limit: 10000,
          name: 'assets/fonts/[name].[hash:7].[ext]'
        }
      }
    ]
  },
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new webpack.ProvidePlugin({
        $: 'jquery',
        jQuery: 'jquery',
        Tether: 'tether',
        'window.jQuery': 'jquery',
        'window.Tether': 'tether'
    })
    // new ExtractTextPlugin('assets/styles/[name].[contenthash].css')
  ],
  eslint: {
    formatter: require('eslint-friendly-formatter')
  }
}

module.exports = config
