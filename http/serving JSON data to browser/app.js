var http = require('http');
var fs = require('fs');

//creating a server to read a file on server and do response
var server = http.createServer(function(req, res){
  console.log('request was made ' + req.url);
  res.writeHead(200, {'Content-Type' : 'application/json'});
  //serving json data
 var myobj = {name:'sayan', job:'coder', age:21};
 res.end(JSON.stringify(myobj));

});


//server listening to a port of the req
server.listen(80, 'localhost');
console.log('listening to port 80');
