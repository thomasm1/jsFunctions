var readlineSync = require('readline-sync');

readlineSync.promptCLLoop({
    add: function(target, into) {
      console.log(target + ' is added into ' + into + '.');
      // Do something...
    },
    remove: function(target) {
      console.log(target + ' is removed.');
      // Do something...
    },
    bye: function() { return true; }
  });
  console.log('Exited');