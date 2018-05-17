//(function() { 
 //  "use strict";
//    }());

///// EXPORRTS ////////////////////////
function work(name){
return `${name} is working`;
}
class Person {
  constructor(name){
      this.name = name;
  }
  doWork() {
    return work(this.name);
  }
}
export {work, Person}
export default Person
 
//////IMPORTS ////////////////////////
import {Person, Animal} from "./lib"
import HumanPerson from "./lib/humans"
import * as lib from "./lib"

/// IMPORTS --> IMMUTABLE BINDINGS ////////////
export let counter = 0;
export function increment() {
    counter += 1;
    return counter;
 }

import {counter} from "./lib/creatures"
counter += 1;  /////////////////creates syntax error ////

import {counter, increment} from "./lib/creatures"
console.log(counter);  //0 
increment();
console.log(counter);   // yields 1

////////////LIVE VARIABLE IMPOERTS! //////
 //////////
export let creature {
name: "TomOLD"
};
export function inspect() {
return creature.name;
}
export function reset() {
creature = {
  name= "TomOLD"
  };
 }
 //
 creature.name = "TOM_NEW";
 console.log(creature);   // {name: "TOM_NEW"}
 console.log(inspect());   //  "TOM_NEW"
 reset();
 console.log(creature);   // {name: "TomOLD"}
 
 ///////////////////////////////// BOUNDARIES WITH MODULES //////////////////
// #### BOUNDARIES WITH MODULEs:  
// ##### Ok: components => http -ok
// ##### Problem: Shell !=> XHR -BAD@@!!!!!!!!!!!
// ##### http | logging | routing 
// ##### headers | 
// ##### xhr | 
// ##### fetch | 
// ##### httpmessage |
// ##### ----|---|----
// ##### components | shell | routes
// ##### rating | 
// ##### userlist |
// ##### dashboard |
// ##### Solution -> Public API with index.js
// ##### export * from "./creatures"
// ##### export * from "./humans"
// ### SMALLEST TOOLCHAIN:
// ##### closure | ty[escript + webpack | typescript + browserify+ uglify
///////////////////////////////////////////////////////////////////////////////////
 

 
