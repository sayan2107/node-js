var http = require('http');
var fs = require('fs');

//creating a server to read a file on server and do response
var server = http.createServer(function(req, res){
  console.log('request was made ' + req.url);

  if (req.url === '/home' || req.url === '/') {
    res.writeHead(200, {'Content-Type' : 'text/html'});
    fs.createReadStream(__dirname + '/index.html').pipe(res);
  }else if (req.url === '/contact') {
    res.writeHead(200, {'Content-Type' : 'text/html'});
    fs.createReadStream(__dirname + '/contact.html').pipe(res);
  }else if (req.url === '/api') {
    var arr = [{name:'say', age:21},{name:'subho', age:20}];
    res.writeHead(200, {'Content-Type' : 'application/json'});
    res.end(JSON.stringify(arr));
  }
  else {
    res.writeHead(200, {'Content-Type' : 'text/html'});
    fs.createReadStream(__dirname + '/error.html').pipe(res);
  }

});


//server listening to a port of the req
server.listen(80, 'localhost');
console.log('listening to port 80');
