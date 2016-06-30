const path = require('path');
const merge = require('webpack-merge');
const webpack = require('webpack');
const postcssImport = require('postcss-import');

//Standard Node environment variables for determining if we are in PRODUCTION
//To enable / disable the hot module replacement.
const PRODUCTION = process.env.NODE_ENV === 'production';
const env = process.env.NODE_ENV || 'development';
const PORT = process.env.PORT || 8080;
const HOST = process.env.HOST || 'localhost'; // Set to 0.0.0.0 on cloud9 if needed
const URL = `http://${HOST}:${PORT}`

const TARGET = process.env.npm_lifecycle_event;
const PATHS = {
  app: path.join(__dirname, 'app'),
  build: path.join(__dirname, 'build'),
  public: path.join(__dirname, 'public'),
  images: path.join(__dirname, 'assets/images'),
  style: path.join(__dirname, 'app/stylesheets')
};

module.exports = {
  devtool: 'source-map',
  entry: [
    PATHS.app
  ],
  output: {
    path: PATHS.public,
    publicPath: '/',
    filename: 'bundle.js'
  },
  plugins: [
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.UglifyJsPlugin({
      minimize: true,
      compress: {
        warnings: false
      }
    }),
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production')
      }
    })
  ],
  module: {
    loaders: [
        // Set up jsx. This accepts js too thanks to RegExp
      {
        test: /\.jsx?$/,
        // Enable caching for improved performance during development
        // It uses default OS directory by default. If you need something
        // more custom, pass a path to it. I.e., babel?cacheDirectory=<path>
        loaders: ['babel?cacheDirectory'],
        // Parse only app files! Without this it will go through entire project.
        // In addition to being slow, that will most likely result in an error.
        include: PATHS.app
      },
      {
        // Test expects a RegExp! Note the slashes!
        test: /\.css$/,
        loader: "style-loader!css-loader!postcss-loader",
        // Include accepts either a path or an array of paths.
        include: PATHS.style
      },
      {
        test: /\.(png|jpg)$/,
        loader: 'file-loader?name=images/[name].[ext]',
        path: PATHS.images
      }
    ]
  },
  postcss: function (webpack) {
    return [
      postcssImport({ addDependencyTo: webpack }),
      require('autoprefixer'),
      require('precss'),
      require('cssnano')
    ];
  }
};
