//FUNCTION
function funcIncrement(i) {
  return i + 1; 
};


fIncrement()
//FUNCTION EXPRESSION
var expIncrement = function(i){
  return i + 1;
};

expIncrement(2); 

//FUNCTION EXPRESSION I-I-F
(function(i){
  return i + 1;
})(); 

function foo(){
  // getting better IFFE
  // Definition or Statement in here 
};

var foo = function() {
  // I am an expression, i.e. MDN - an expression is any valid unit of code that resolves to a value
  // I resolve to a value, even if just "undefined"
};

//now bad code turns good with parens:
( function foo(){ })();