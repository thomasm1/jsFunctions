function foo(){
  // bad code IFFE
}();

//now bad code turns good with parens:
( function foo(){ 
  // good iffe
})();

function foo(){
  // getting better IFFE
  // Definition or Statement in heree
};

var foo = function() {
  // I am an expression, i.e. MDN - an expression is any valid unit of code that resolves to a value
  // I resolve to a value, even if just "undefined"
};

//now bad code turns good with parens:
( function foo(){ })();