var fs = require('fs');

var readME = fs.readFileSync('readMe.txt', 'utf8');
fs.writeFileSync('writeMe.txt', 'hey..successfully written');
