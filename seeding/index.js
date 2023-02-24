const pool = require("../connection");
const fs = require("fs");

const seedQuery = fs.readFileSync("seeding/seeding.sql", { encoding: "utf8" });

pool.query(seedQuery, null, (err, result) => {
  if (err) throw err;

  console.log(result);
  console.log("seeding complete...");
  pool.end();
});
