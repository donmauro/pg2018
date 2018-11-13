const { Pool } = require('pg')

const pool = new Pool({
    host: 'localhost',
    port: 5433,
    database: 'postgres',
    user: 'postgres',
    password: 'postgres',
    max: 20,
    idleTimeoutMillis: 30000,
    connectionTimeoutMillis: 2000,
  })

  /*const pool = new Pool({
    host: 'ec2-54-247-111-19.eu-west-1.compute.amazonaws.com',
    port: 5432,
    database: 'd9ca76hljd7aa2',
    user: 'ipwcbowgiosjmj',
    password: '2b1630ee4221dafc2f07db26425e08a1baeff16b7a42b3d153013d783031f4af',
    max: 20,
    idleTimeoutMillis: 30000,
    connectionTimeoutMillis: 2000,
    ssl: true,
  })*/

module.exports = {
  query: (text, params) => {
    console.log("clients:" + pool.totalCount)
    return pool.query(text, params)

  }
}