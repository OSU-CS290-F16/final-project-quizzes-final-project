var fs = require('fs');
var path = require('path');
var express = require('express');
var Handlebars = require('handlebars');
var app = express();
var port = process.env.PORT || 3000;


// Serve static files from public/.
app.use(express.static(path.join(__dirname, 'public')));

/* app.get('*', function (req, res) {
  res.send('The server is listening!')
}); */

// Listen on the specified port.
app.listen(port, function () {
  console.log("== Listening on port", port);
});
