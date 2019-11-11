'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');
// process.stdin.setEncoding('ascii');

let __input_stdin = '';
let  __input_stdin_array = "";
let ___input_currentline = 0;

process.stdin.on('data', function(data) {
    __input_stdin += data;
});

// process.stdin.on('end', function() {
//     __input_stdin = __input_stdin.split('\n'); 
//     main();
// });
process.stdin.on('end', function () {
    __input_stdin_array = __input_stdin.split("\n");
    let res;
    let n = parseInt(__input_stdin_array[__input_currentline].trim(), 10);
    __input_currentline += 1;

    for (let i = 0; i<n;i++) {
        let _line = __input_stdin_array[__input_currentline].trim();
        __input_currentline += 1;
        let line = _line.split(" ");
        let _a = parseInt(line[0]);
        let _b = parseInt(line[1]);
        res = _a + _b;
        process.stdout.write(""+res+"\n");
    }
    main();
})
 

function readLine() {
    return __input_stdin[___input_currentline++];
}



// Complete the findNumber function below.
function findNumber(arr, k) {


}

function main() {
    let ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    let arrCount = parseInt(readLine().trim(), 10);

    let arr = [];

    for (let i = 0; i < arrCount; i++) {
        let arrItem = parseInt(readLine().trim(), 10);
        arr.push(arrItem);
    }

    let k = parseInt(readLine().trim(), 10);

    let res = findNumber(arr, k);

    ws.write(res + '\n');

    ws.end();
}

// bignumber.js@4.0.0, jquery@3.2.1, lodash@4.17.4, underscore@1.8.3

// process.stdin.resume();
// process.stdin.setEncoding('ascii');

// var __input_stdin = "";
// var __input_stdin_array = "";
// var __input_currentline = 0;

// process.stdin.on('data', function (data) {
//     __input_stdin += data;
// });

// process.stdin.on('end', function () {
//    z_input_stdin_array = __input_stdin.split("\n");
//     var res;
//     var n = parseInt(__input_stdin_array[__input_currentline].trim(), 10);
//     __input_currentline += 1;
//     for (var i = 0; i<n;i++) {
//         var _line = __input_stdin_array[__input_currentline].trim();
//         __input_currentline += 1;
//         var line = _line.split(" ");
//         var _a = parseInt(line[0]);
//         var _b = parseInt(line[1]);
//         res = _a + _b;
//         process.stdout.write(""+res+"\n");
//     }
// })

