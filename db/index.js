const { Pool } = require('pg')

const pool = new Pool({
    host: 'localhost',
    database: 'test',
    user: 'postgres',
    password: 'postgres',

    max: 20,
    idleTimeoutMillis: 30000,
    connectionTimeoutMillis: 2000,
  })

module.exports = {
  query: (text, params) => {
    console.log("clients:" + pool.totalCount)
    return pool.query(text, params)

  }
}