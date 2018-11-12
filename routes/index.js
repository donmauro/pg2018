// ./routes/index.js
const users = require('./users')
const citta = require('./citta')

module.exports = (app) => {
  app.use('/users', users)
  app.use('/citta', citta)
}