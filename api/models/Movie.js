import mongoose from "mongoose";
import { ObjectID } from "mongodb";
require('mongoose-double')(mongoose);


const Schema = mongoose.Schema;

ObjectID.prototype.valueOf = function() {
  return this.toString();
};

var SchemaTypes = mongoose.Schema.Types;

const movieSchema = new Schema({
  vote_count: {
    type: Number,
    min: 0,
    required: true
  },
  video: {
    type: Boolean,
    required: true
  },
  vote_average: {
    type: SchemaTypes.Double,
    required: true
  },
  title: {
    type: String,
    required: true
  },
  popularity: {
    type: SchemaTypes.Double,
    required: true
  },
  poster_path: {
    type: String,
    required: true
  },
  original_language: {
    type: String,
    required: true
  },
  original_title: {
    type: String,
    required: true
  },
  backdrop_path: {
    type: String,
    required: true
  },
  adult: {
    type: Boolean,
    required: true
  },
  overview: {
    type: String,
    required: true
  },
  release_date: {
    type: String,
    required: true
  },
  tmdb_id: {
    type: Number,
    min: 0,
    required: true
  },
  genres: [{
    type:String
  }],


});


export default mongoose.model("movies", movieSchema);
