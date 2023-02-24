const pool = require("../db");

const getCategory = (req, res) => {
  pool.query(
    `SELECT * FROM category ORDER BY category_id ASC`,
    null,
    (err, result) => {
      if (err) throw err.message;

      res.status(200).json(result.rows);
    }
  );
};

const getFilmByIdCategory = (req, res) => {
  const { id } = req.params;

  pool.query(
    `SELECT film.*, category.name AS category_film FROM film 
    INNER JOIN film_category ON film.film_id = film_category.film_id 
    INNER JOIN category ON film_category.category_id = category.category_id 
    WHERE category.category_id = $1`,
    [id],
    (err, result) => {
      if (err) throw err.message;

      res.status(200).json(result.rows);
    }
  );
};

module.exports = { getCategory, getFilmByIdCategory };
