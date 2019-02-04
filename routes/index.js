var express = require('express');
var router = express.Router();

var Question = require('../models/question');
var Comment = require('../models/comment');
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* POST QUESTION */
router.post('/question', function(req, res) {
  let question_text = req.body.q_text;
  Question.create({
    text: question_text,
    posted: new Date(),
  }).then((result) => { 
    res.redirect('/view/' + result._id)
  })
})

/* VIEW QUESTION */

router.get('/view/:id', function(req,res) {
  let questionID = req.params.id;
  Question.find({_id:questionID})
  .then(results => {
    res.send(results);
  })
  .catch(() => {
    res.send("UNABLE TO LOAD");
  }
  )
})













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

/* COMMENT TEST */
router.get('/test/fakenewComment/:id', function(req, res) {
  let id = req.params.id;
  Question.findOneAndUpdate(
    {"_id": id},
    {
      $push: {
          comments:{ text: "Lorem ipsum",
          posted: new Date(),
          score: 0,
          isAnswer: false,
          questionID:"null",
        }
    }}
  )
  .then(results => {
    res.send(results);
  })
  .catch(() => {
    res.send("UNABLE TO LOAD");
  }
  )

})

/* VIEW DATA RELATED TO A QUESTION TEST */
router.get('/test/view/:id', function(req,res) {
  let questionID = req.params.id;
  Question.find({_id:questionID})
  .then(results => {
    res.send(results);
  })
  .catch(() => {
    res.send("UNABLE TO LOAD");
  }
  )
})
module.exports = router;
