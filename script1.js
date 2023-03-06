"use strict";

// let arr = [1, 2, 3, 4, 5, 6];

// for (let i = 1; i <= arr.length; i++) {
//     console.log([arr[i]]);
// };

// let res = 0

// for (let i = 1; i <= arr.length; i++) {
//     res = arr[i] + arr[i + 1];
//     console.log(res);
// };

// for (let i = 1; i <= arr.length; i++) {
//     console.log(arr[i - 2], arr[i - 1]);
// };

// for (let i = 1; i <= arr.length; i++) {
//     console.log(arr[i - 2] + arr[i - 1]);
// };

let res = 0;

for (let i = 1; i <= arr.length; i++) {
    res = arr[i - 1] + arr[i] + arr[i + 1];
    console.log(res)
};