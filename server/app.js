/* eslint-disable */
const webpack = require('webpack');
const webpackMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');
const config = require('../webpack.config.js');
const isDeveloping = process.env.NODE_ENV !== 'production';
const port = isDeveloping ? 1337 : process.env.PORT;
const path = require('path');
const compiler = webpack(config);
const express = require('express');

export default function (app) {
  app.use(webpackMiddleware(compiler, {
    noInfo: true,
    publicPath: config.output.publicPath,
  }));

  app.use(webpackHotMiddleware(compiler, {
    log: console.log,
    path: '/__webpack_hmr',
    heartbeat: 10 * 1000,
  }));

  app.use(express.static('./build'));

  /* Send the bundle file from the build folder */
  app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname, 'build/index.html'));
  });
}
/* eslint-enable */
