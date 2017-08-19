var http = require('http');
var fs = require('fs');

//creating a server to read a file on server and do response
var server = http.createServer(function(req, res){
  console.log('request was made ' + req.url);
  res.writeHead(200, {'Content-Type' : 'text/plain'});

  //serving a html file
  var myReadStream = fs.createReadStream(__dirname + '/readMe.txt', 'utf8');

  //sending(piping) response to the browser
  myReadStream.pipe(res);
});


//server listening to a port of the req
server.listen(80, 'localhost');
console.log('listening to port 80');
