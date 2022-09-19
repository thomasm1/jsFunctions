"use strict";
// TYPESCRIPT
var aTuple;
var aSet;
var anObject;
var aNumber;
var aBoolean;
var aString = 'let\s go';
var anArray = [1, 2, 3];
aTuple = [1, 'a'];
aSet = new Set([1, 2, 3]);
console.log(Array.from(aSet)[2]);
anObject = { 1: 'a' };
aNumber = 123; // decimal
aNumber = 123.456; //float
aNumber = 0xffff; // hex
aNumber = 21; // binary
aNumber = 441; // octal
aBoolean = aString.endsWith('o');
function foo(bar) {
    return "hello" + bar;
}
var bazz = "z!!!";
console.log(foo(bazz));
var aFoo = /** @class */ (function () {
    function aFoo() {
    }
    return aFoo;
}());
var Foo = /** @class */ (function () {
    function Foo(name, id) {
        this.stepsWalked = 1;
        this.name = name;
        this.id = id;
    }
    Foo.prototype.walk = function (steps) {
        console.log('Foo "' + this.name + '" walks ' + steps);
        this.stepsWalked += steps;
    };
    Foo.prototype.totalSteps = function () {
        console.log(this.stepsWalked);
        return this.stepsWalked;
    };
    return Foo;
}());
var foofoo = new Foo('themos', 12);
console.log(foofoo.totalSteps());
