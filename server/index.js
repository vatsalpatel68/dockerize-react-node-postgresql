require('dotenv');
const express = require("express");
const app = express();
const PORT = process.env.PORT;
const CORS = require('cors');
const { Pool } = require('pg');
const pool = new Pool({
  user: 'user',
  host: 'db',
  database: 'sample',
  password: 'pass',
  port: 5432,
})

app.use(CORS());

app.get('/', (req, res) => {
  pool.query('SELECT * from sample', (err, res) => {
    console.log("Error is :" + err);
    console.log("Response is: " + res);
    pool.end()
  })
  res.send('Hello world');
});

app.listen(PORT, () => console.log(`on port ${PORT}`));