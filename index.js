const express = require("express");
const pool = require("./db");
const filmRouter = require("./routers/filmRouter");
const categoryRouter = require("./routers/categoryRouter");

const app = express();
const port = 5000;

pool.connect((error, result) => {
  if (!error) {
    console.log("success connected to database", result.database);

    app.get("/", (req, res) => {
      res.send("connected..");
    });

    app.use(express.json());
    app.use(express.urlencoded({ extended: true }));

    app.use("/film", filmRouter);
    app.use("/category", categoryRouter);

    app.listen(port, () => {
      console.log("server running at port", port);
    });
  } else {
    console.log(error.message);
  }
});
