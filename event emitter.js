var events = require('events');

var myEmitter = new events.EventEmitter();

myEmitter.on('oncall', function(msg){
  console.log(msg);
});

myEmitter.emit('oncall', 'hallo there');
