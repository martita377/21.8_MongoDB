var express = require('express');
var app = express();
var port = process.env.PORT || 3000;

app.set('view engine', 'pug');
app.set('views', './views');

app.get('/', function(req, res){
    res.render('home');
});

