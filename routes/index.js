var express = require('express');
var router = express.Router();

var Question = require('../models/question');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* HOME TEST */
router.get('/test/', function(req,res) {
  Question.find({})
  .then(results => {
    res.send(results);
  })
  .catch(() => {
    res.send("UNABLE TO LOAD");
  }
  )
})

/* CREATE TEST */
router.get('/test/fakenew', function(req, res) {
  Question.create({
    text: "Blah Blah",
    posted: new Date(),
  }).then(() => { 
    res.send("Created");
  })
})
module.exports = router;
