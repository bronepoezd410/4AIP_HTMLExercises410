"use strict";

// let arr = [
// 	['a', 'b', 'c'],
// 	['d', 'e', 'f'],
// 	['g', 'h', 'i'],
// 	['j', 'k', 'l'],
// ];

// console.log(arr[3][2] + arr[1][1] + arr[2][0] +arr[0][0]);

// let later = [[1, 2], [3, 4], [5, 6]];
// let sum = 0;

// for (let i = 0; i < later.length; i++) {
//   for (let j = 0; j < later[i].length; j++) {
//     sum += later[i][j];
//   }
// }

// console.log(sum); // Output: 21

let letarr = [
   [
     [1, 2],
     [3, 4],
   ],
   [
     [5, 6],
     [7, 8],
   ],
 ];
 
 let sum = 0;
 
 for (let i = 0; i < letarr.length; i++) {
   for (let j = 0; j < letarr[i].length; j++) {
     for (let k = 0; k < letarr[i][j].length; k++) {
       sum += letarr[i][j][k];
     }
   }
 }
 
 console.log(sum); // Output: 36