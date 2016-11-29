// Hi
var fs = require('fs');
var path = require('path');
var express = require('express');
var Handlebars = require('handlebars');
var app = express();
var port = process.env.PORT || 3000;


// Serve static files from public/.
app.use(express.static(path.join(__dirname, 'public')));


// Listen on the specified port.
app.listen(port, function () {
  console.log("== Listening on port", port);
});
