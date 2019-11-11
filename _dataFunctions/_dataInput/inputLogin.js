var readlineSync = require('readline-sync');
  
var userName = readlineSync.question('May I have your username? ');
console.log('Hi ' + userName + '!');
  
var password = readlineSync.question('and your password? ', {
  hideEchoBack: true                // masking is default ****
});
console.log('Welcome, USER: ' + userName + '; PW: ' + password);