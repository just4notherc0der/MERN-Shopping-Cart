var express = require('express');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var logger = require('morgan');

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

// listen on port 3001
app.listen(3001, function(err) {
  if(err) {
    return err;
  }
  console.log('Proxy server started on port 3001');
})
