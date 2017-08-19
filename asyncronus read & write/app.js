var fs = require('fs');

var readME = fs.readFile('readMe.txt', 'utf8', function(err, data){
  fs.writeFile('writeMe.txt', data);
});

//in syncronus the sync method is executed first then other code

//in asyncronus both happens
