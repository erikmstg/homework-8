const { Pool } = require("pg");

const pool = new Pool({
  user: "postgres",
  password: "nevermind",
  database: "dvdrental",
  host: "localhost",
  port: 5432,
});

module.exports = pool;
