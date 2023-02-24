const express = require("express");
const { getFilms, getFilmById } = require("../controllers/filmController");

const router = express.Router();

router.get("/", getFilms);
router.get("/:id", getFilmById);

module.exports = router;
