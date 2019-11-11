var readlineSync = require('readline-sync'),
  options5 = ['Option 1', 'Option 2', 'Option_3', 'Option 4', 'Option 5'],
  index = readlineSync.keyInSelect(options5, 'Which one?');

console.log('Ok, ' + options5[index] + ' goes to you ...');