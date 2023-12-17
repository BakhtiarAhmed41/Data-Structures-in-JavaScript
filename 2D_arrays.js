// An hourglass sum is the sum of an hourglass's values.
// Calculate the hourglass sum for every hourglass in an array ,
// then print the maximum hourglass sum.

'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function (inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function () {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}

/*
 * Complete the 'hourglassSum' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts 2D_INTEGER_ARRAY arr as parameter.
 */

function hourglassSum(arr) {
    const sum = [];

    for (let n = 0; n <= arr.length - 3; n++) {
        for (let m = 0; m <= arr[n].length - 3; m++) {
            const hourglass = arr[n][m] + arr[n][m + 1] + arr[n][m + 2] + arr[n + 1][m + 1] + arr[n + 2][m] + arr[n + 2][m + 1] + arr[n + 2][m + 2];

            sum.push(hourglass);
        }
    }

    sum.sort((a, b) => b - a);
    return sum[0];
}


function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    let arr = Array(6);

    for (let i = 0; i < 6; i++) {
        arr[i] = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));
    }

    const result = hourglassSum(arr);

    ws.write(result + '\n');

    ws.end();
}
