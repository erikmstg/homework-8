const pool = require("../db");

const getFilms = (req, res) => {
  pool.query(`SELECT * FROM film ORDER BY film_id ASC`, null, (err, result) => {
    if (err) throw err.message;

    res.status(200).json(result.rows);
  });
};

const getFilmById = (req, res) => {
  const { id } = req.params;

  pool.query(`SELECT * FROM film WHERE film_id = $1`, [id], (err, result) => {
    if (err) throw err.message;

    res.status(200).json(result.rows[0]);
  });
};

module.exports = { getFilms, getFilmById };
