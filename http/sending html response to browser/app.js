var http = require('http');
var fs = require('fs');

//creating a server to read a file on server and do response
var server = http.createServer(function(req, res){
  console.log('request was made ' + req.url);
  res.writeHead(200, {'Content-Type' : 'text/html'});

  //serving a html file from server to the browser
  var myReadStream = fs.createReadStream(__dirname + '/index.html');

  //sending(piping) response to the browser
  myReadStream.pipe(res);
});


//server listening to a port of the req
server.listen(80, 'localhost');
console.log('listening to port 80');
