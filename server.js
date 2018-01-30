var express = require('express');
var app = express();
var port = process.env.PORT || 3000;

app.set('view engine', 'pug');
app.set('views', './views');

app.get('/', function(req, res){
    res.render('home');
});

app.listen(port);
app.use(function (req, res, next) {
    res.status(404).send('Wybacz, nie mogliśmy odnaleźć tego, czego żądasz!')
});