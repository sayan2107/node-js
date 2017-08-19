var express = require('express');
var app = express();

app.set('view engine', 'ejs');

app.get('/', function(req ,res){
  res.render('index');
});
app.get('/contact', function(req ,res){
  res.render('contact');
});

app.get('/profile/:name', function(req, res){
  data = {age:25, job:'coder', hobbies:['football', 'utube']};
  //it will by default look at the views folder
  res.render('profile', {person: req.params.name, data: data});
});


app.listen(80);
