var http = require('http');
var fs = require('fs');

//readStream is a buffer which sends chunks of data through buffer,
//this is a eventEmitter also
var myReadStream = fs.createReadStream(__dirname + '/readMe.txt', 'utf8');
var myWriteStream = fs.createWriteStream(__dirname + '/writeMe.txt');

//sending data in small chuks
myReadStream.on('data', function(chunk){
  console.log('new chunk received');
  //writing data to file in chunks
  myWriteStream.write(chunk);

});




// var server = http.createServer(function(req, res){
//   console.log('request was made ' + req.url);
//   res.writeHead(200, {'Content-Type' : 'text/plain'});
//   res.end('server responded');
// });
//
// server.listen(80, 'localhost');
// console.log('listening to port 80');
