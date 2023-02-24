const pool = require("../connection");
const fs = require("fs");

const seedQuery = fs.readFileSync("seeding/seeding.sql", { encoding: "utf8" });

pool.query(seedQuery, (err, result) => {
  if (err) throw err.stack;

  console.log(result);
  console.log("seeding complete...");
  pool.end();
});
