// Define schema
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var QuestionSchema = new Schema({
  text: String,
  posted: Date
});

// Compile model from schema
var Question = mongoose.model('Question', QuestionSchema );
module.exports = Question;