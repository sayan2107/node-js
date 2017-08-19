var express = require('express');

var app = express();

app.get('/', function(req ,res){
  res.sendFile(__dirname + '/index.html');
});
app.get('/contact', function(req ,res){
  res.sendFile(__dirname + '/contact.html');
});

app.get('/profile/:id', function(req, res){
  res.send('wellcome.you have requested for id ' + req.params.id);
});
app.listen(80);
