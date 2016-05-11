const path = require('path');
const merge = require('webpack-merge');
const webpack = require('webpack');
const OpenBrowserPlugin = require('open-browser-webpack-plugin');
const HtmlwebpackPlugin = require('html-webpack-plugin');

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
  build: path.join(__dirname, 'build')
};

process.env.BABEL_ENV = TARGET;

const common = {

  // Entry accepts a path or an object of entries. We'll be using the
  // latter form given it's convenient with more complex configurations.
  entry: {
    app: PATHS.app
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  output: {
    path: PATHS.build,
    filename: 'bundle.js'
  },
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
        loaders: ['style', 'css'],
        // Include accepts either a path or an array of paths.
        include: PATHS.app
      }

    ]
  }
};


// Default configuration. We will return this if
// Webpack is called outside of npm.
if(TARGET === 'start' || !TARGET) {
  module.exports = merge(common, {
    devtool: 'eval-source-map',
      devServer: {
        contentBase: PATHS.build,

        // Enable history API fallback so HTML5 History API based
        // routing works. This is a good default that will come
        // in handy in more complicated setups.
        historyApiFallback: true,
        hot: true,
        inline: true,
        progress: true,

        // Display only errors to reduce the amount of output.
        stats: 'errors-only',

        // Constants defined above take care of logic
        // For setting host and port
        host: HOST,
        port: PORT
      },
      plugins: PRODUCTION ? [
        new webpack.optimize.UglifyJsPlugin({

        }),
        new webpack.DefinePlugin({
          'process.env': Object.keys(process.env).reduce(function(o, k) {
            o[k] = JSON.stringify(process.env[k]);
            return o;
          }, {})
        }),
        new HtmlwebpackPlugin({
          title: 'Food Drivr',
          template: 'index.html'
        })
      ] :
       [
        new webpack.HotModuleReplacementPlugin(),
        new HtmlwebpackPlugin({
          title: 'Food Drivr',
          template: 'index.html'
        }),
        new OpenBrowserPlugin({
          url: URL
        })
      ]
    });
}

if(TARGET === 'build') {
  module.exports = merge(common, {});
}
