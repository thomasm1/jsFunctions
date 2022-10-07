"use strict";
exports.__esModule = true;
var cube_a_1 = require("./cube-a");
var cube_b_adapter_1 = require("./cube-b-adapter");
var totalCubes = 5;
var cubesMade = 0;
var manufactureCube = function () {
    // producing first 5 available cubes
    var width = Math.floor(Math.random() * 10) + 1;
    var height = Math.floor(Math.random() * 10) + 1;
    var depth = Math.floor(Math.random() * 10) + 1;
    var cube = new cube_a_1["default"]();
    var success = cube.manufacture(width, height, depth);
    if (success) {
        cubesMade = cubesMade + 1;
    }
    else {
        // try alternate cubemaker
        console.log("company A busy, trying cube/create B");
        cube = new cube_b_adapter_1["default"];
        success = cube.manufacture(width, height, depth);
        if (success) {
            cubesMade = cubesMade + 1;
        }
        else {
            console.log("Alternate Company b busy, retrying Company A");
        }
    }
};
var interval = setInterval(function () {
    manufactureCube();
    if (cubesMade >= totalCubes) {
        clearInterval(interval);
        console.log("".concat(totalCubes, " cubes manufactureed"));
    }
}, 1000);
