var fs = require('fs');
var path = require('path');
var express = require('express');
var Handlebars = require('handlebars');
var app = express();
var port = process.env.PORT || 3000;

var quizData = require('./quiz-data');

// Serve static files from public/.
app.use(express.static(path.join(__dirname, 'public')));

/* app.get('*', function (req, res) {
  res.send('The server is listening!')
}); */

//Change this depending on what needed 
app.get('/', function (req, res) {
  res.render('index-page', {
    title: 'BeavFeed -- Homepage',
  });
});

app.get('/:name', function (req, res, next) {

  var quizData = quizData[req.params.name];

  if (quizData) {
    res.render('quizPage', {
      title: 'BeavFeed - ' + quizData.quizName,
      quizName: quizData.quizName,
      quizTag: quizData.quizTag,
      questions: quizData.questions
    });
  } else {
    next();
  }

});

// Listen on the specified port.
app.listen(port, function () {
  console.log("== Listening on port", port);
});
