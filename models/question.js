// Define schema
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var CommentSchema = new Schema({
  text: String,
  posted: Date,
  score: Number,
  isAnswer: Boolean,
  questionID: String,
});


var QuestionSchema = new Schema({
  text: String,
  posted: Date,
  comments: [CommentSchema]
});

// Compile model from schema
var Question = mongoose.model('Question', QuestionSchema );
module.exports = Question;