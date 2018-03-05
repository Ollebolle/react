const path = require('path')
const HTMLWebpackPlugin = require('html-webpack-plugin')
const DashboardPlugin = require('webpack-dashboard/plugin')
// const Jarvis = require('webpack-jarvis')

const dev = process.env.NODE_ENV !== 'production' && process.argv.indexOf('-p') === -1

const HTMLWebpackPluginConfig = new HTMLWebpackPlugin({
  template: path.join(__dirname, '/src/index.html'),
  filename: 'index.html',
  inject: 'body'
})

module.exports = {
  entry: './src/index.jsx',
  resolve: {
    extensions: ['.js', '.jsx']
  },
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, 'dist')
  },
  devServer: {
    host: 'localhost',
    port: '2100',
    headers: {
      'Access-Control-Allow-Origin': '*'
    }
  },
  module: {
    rules: [
      {
        test: /\.jsx$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.sass$/,
        use: [{
          loader: "style-loader" // creates style nodes from JS strings
      }, {
          loader: "css-loader" // translates CSS into CommonJS
      }, {
          loader: "sass-loader" // compiles Sass to CSS
        }]
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192
            }
          }
        ]
      }
    ]
  },
  plugins: dev ? [
    // new Jarvis({
    //   port: 1337 // optional: set a port
    // })
    HTMLWebpackPluginConfig,
    new DashboardPlugin()
  ]
  :
  [
    HTMLWebpackPluginConfig,
  ],
  devtool: dev ? 'eval-source-map' : false
};
