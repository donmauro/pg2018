const { Client } = require('pg');

const client = new Client({
  connectionString: process.env.DATABASE_URL,
  ssl: true,
});

client.connect();

module.exports = {
    query: (text, params) => {
      console.log("clients:")
      client.query(text, params, (err, res) => {
        if (err) throw err;

        for (let row of res.rows) {
          console.log(JSON.stringify(row));
        }
        console.log(res.rows)
        client.end();
      });
  }
}