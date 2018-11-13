// ./routes/index.js
const users = require('./users')
const citta = require('./citta')

module.exports = (app) => {
  app.get( '/', ( req, res ) => {
    res.sendfile('index.html');
  })
  app.use('/users', users)
  app.use('/citta', citta)
}