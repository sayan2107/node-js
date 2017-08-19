var http = require('http');

var server = http.createServer(function(req, res){
  console.log('request wa made ' + req.url);
  res.writeHead(200, {'Content-Type' : 'text/plain'});
  res.end('server responded');
});

server.listen(80, 'localhost');
console.log('listening to port 80');
