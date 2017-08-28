'use strict'

var express = require('express');
var app = express();

var path = require('path');

// static files
app.use(express.static('public'));

// main entry point
app.get('/', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'public', 'index.html'));
});

// start the server
app.listen(5555, () => {
  console.log('Application started on port 5555');
});
