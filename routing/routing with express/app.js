var express = require('express');

var app = express();

app.get('/', function(req ,res){
  res.send('responded');
});
app.get('/contact', function(req ,res){
  res.send('contact form');
});

app.listen(80);
