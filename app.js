// ./app.js
const express = require('express')
const mountRoutes = require('./routes')

const app = express()
app.use(express.static( __dirname + '/public'))
mountRoutes(app)

const port = process.env.PORT||3000 




app.listen(port,  () => {
  console.log(`App listening on port ${ port }`);
})