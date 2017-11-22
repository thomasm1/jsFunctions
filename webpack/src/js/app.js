require('../css/style.css');
// require('!style-loader!css-loader!./style.css');
let $ = require('jquery');

let mod = require('./mod.js');
$.each(mod, function(key, value){
$('body').append('<h1>'+mod[key].datum+'</h1>');});


console.log(mod[0].datum);
console.log(mod[0].datum);
document.write(mod[0].datum);
document.write(mod[0].datum);


//console.log(require('./mod.js'));
