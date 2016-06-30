const path = require('path')
const express = require('express')

module.exports = {
  app: function () {
    const app = express()
    const indexPath = path.join(__dirname, './index.html')
    const buildPath = express.static(path.join(__dirname, './build'))
    app.use('/', buildPath)
    app.get('/', ((req, res) => res.sendFile(indexPath)))
    return app
  }
}
