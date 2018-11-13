// ./app.js
const express = require('express')
const mountRoutes = require('./routes')

const app = express()
mountRoutes(app)

let port = process.env.PORT; //HEROKU PORT
if (port == null || port == "") {
  port = 3000;
}

app.listen(port, function () {
  console.log('App listening on port ${ port }');
})