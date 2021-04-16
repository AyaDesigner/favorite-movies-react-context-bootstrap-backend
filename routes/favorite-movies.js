var express = require('express');
var router = express.Router();


let Movie = require('../models/movie-model');

router.route('/').get((req, res) => {
  Movie.find()
    .then(movies => res.json(movies))
    .catch(err => res.status(400).json('Error: ' + err));
});


router.route('/').post((req, res, next) => {
  console.log(req.body);

  let movie = new Movie({
    Title: req.body.Title,
    Year: req.body.Year,
    Poster: req.body.Poster,
    imdbID: req.body.imdbID
  })
  movie.save(function (err, post) {
    if (err) { return next(err) }
    res.status(201).json(movie);
  })
});


//delete movie from favorites
router.route('/:id').delete((req, res) => {
  Movie.findByIdAndDelete(req.params.id)
    .then(() => res.json('Movie deleted.'))
    .catch(err => res.status(400).json('Error: ' + err));
});




module.exports = router;
