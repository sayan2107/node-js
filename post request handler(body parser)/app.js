var express = require('express');
var bodyParser = require('body-parser');
var app = express();

//post methods data will be passed by this middleware
var urlencodedParser = bodyParser.urlencoded({ extended: false })

app.set('view engine', 'ejs');

//middleware, which is serving static files
app.use('/assets', express.static('assets'));

app.get('/', function(req ,res){
  res.render('index');
});
app.get('/contact', function(req ,res){
  res.render('contact', {qs: req.query});
});

app.post('/contact', urlencodedParser, function(req ,res){
  console.log(req.body);
  res.render('contact-success', {data: req.body});
});

app.get('/profile/:name', function(req, res){
  data = {age:25, job:'coder', hobbies:['football', 'utube']};
  //it will by default look at the views folder
  res.render('profile', {person: req.params.name, data: data});
});


app.listen(80);
