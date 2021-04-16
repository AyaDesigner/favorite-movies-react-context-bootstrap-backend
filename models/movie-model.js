const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const movieSchema = new Schema({
    Poster:{type: String, required: true},
    Title: {type: String, required: true},
    Year: {type: Number, required: true},
    imdbID: {type: String, required: true}
    }, {
    timestamps: true
    });


const Movie = mongoose.model('Movie', movieSchema);

module.exports = Movie;