var fs = require('fs');

fs.mkdir('new', function(){
  fs.readFile('readMe.txt', 'utf8', function(err, data){
    fs.writeFile('./new/writeMe.txt', data);
  });
});
//fs.unlink('writeMe.txt');
