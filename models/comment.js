// Define schema

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var CommentSchema = new Schema({
  text: String,
  posted: Date,
  score: Number,
  isAnswer: Boolean,
});

// Compile model from schema
var Comment = mongoose.model('Comment', CommentSchema );
module.exports = Comment;