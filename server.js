const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const mongoose = require('mongoose');
const url = process.env.MONGOLAB_URI;
const PORT = process.env.PORT || 5000;

const getBooks = (req, res) => {
 req.db.books
  .find()
  .toArray((err, result) => res.render('index', { result }));
};

const saveBook = (req, res) => {
  req.db.books.insert(req.body, function() {
  res.redirect('/');
 });
};

mongoose.connect(
  url,
 {},
 (err, db) => {
  express()
   .use(express.static(path.join(__dirname, 'public')))
   .use(bodyParser.urlencoded({ extended: true }))
   .use((req, res, next) => {
    req.db = {
     books: db.collection('books'),
    };
    return next();
   })
   .set('views', path.join(__dirname, 'views'))
   .set('view engine', 'ejs')
   .get('/', getBooks)
   .post('/', saveBook)
   .listen(PORT, () => console.log(`Listening on ${PORT}`));
 }
);