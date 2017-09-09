var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var index = require('./routes/index');
var users = require('./routes/users');

var app = express();

// database
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/shoppingcart', {
  useMongoClient: true
});

Book = require('./models/book');

// common middleware(body-parser, static files, cookies)
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// catch all routes
app.get('/', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'public', 'index.html'));
});

// get books
app.get('/books', (req, res) => {
  Book.find((err, books) => {
    if(err) {
      console.log('ERORCHINA');
      throw err;
    }
    res.json(books);
  })
});

// post books
app.post('/books', (req, res) => {
  var book = req.body;
  Book.create(book, (err, books) => {
    if(err) {
      throw err;
    }
    res.json(books);
  })
});

// delete books
app.delete('books/:id', (req, res) => {
  var query = { _id: req.params._id };

  Books.remove(query, (err, books) => {
    if(err) {
      throw err;
    }
    res.json(books);
  })
});

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
