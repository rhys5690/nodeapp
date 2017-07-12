// Your Javascript Code Goes Here

// Note: The 'starter' folders that appear in this course's downloadable source code is here to give you a starting point to try out coding yourself. The 'finished' folder contains the code as it is when we finish the lecture. You can use the 'finished' folder to compare to your own code, or just examine the finished code.
var Emitter = require('./emitter')

var emtr = new Emitter()

emtr.on('greet', function() {
  console.log('yoyoyoo');
});

emtr.on('greet', function() {
  console.log('a greet occurred');
});

emtr.emit('greet');
