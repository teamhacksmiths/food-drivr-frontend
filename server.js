/* eslint-disable */
const webpack = require('webpack');
// const webpackMiddleware = require('webpack-dev-middleware');
// const webpackHotMiddleware = require('webpack-hot-middleware');
// const config = require('../webpack.config.js');
const isDeveloping = process.env.NODE_ENV !== 'production';
const port = isDeveloping ? 1337 : process.env.PORT;
const path = require('path');
// const compiler = webpack(config);
const express = require('express');

const app = express();

app.use('/build', express.static(__dirname + 'build'));

/* Send the bundle file from the build folder */
app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build/index.html'));
});

app.listen(port, () => {
  console.log(`App is running on port ${port}`)
});
/* eslint-enable */
