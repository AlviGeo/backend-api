const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const newSchemaFilm = new Schema({
  title: {
    type: String,
    required: true,
  },
  release: {
    type: String,
    required: true,
  },
  playing: {
    type: String,
    required: true,
  },
  genre: {
    type: String,
    required: true,
  },
});

module.exports = mongoose("film", newSchemaFilm);
// film adalah name collection atau nama tabel
