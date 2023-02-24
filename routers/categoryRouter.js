const express = require("express");
const {
  getCategory,
  getFilmByIdCategory,
} = require("../controllers/categoryController");

const router = express.Router();

router.get("/", getCategory);
router.get("/:id", getFilmByIdCategory);

module.exports = router;
