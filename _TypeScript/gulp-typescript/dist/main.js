"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var greet_1 = require("./greet");
console.log(greet_1.sayHello("TypeScript"));
function showHello(divName, name) {
    var elt = document.getElementById(divName);
    elt.innerText = greet_1.sayHello(name);
}
showHello("greeting", "TypeScript");
