"use strict";

// console.log('');
// let arr1 = [];

// for (let i = 1; i <= 10; i++) {
//    arr1.push(i)
// }

// console.log(arr1)

// console.log('');
// let arr = [];

// for (let i = 1; i <= 10; i++) {
//    arr.push('x')
// }

// console.log(arr2)

// console.log('');
let arr = [1, -9, 3, -5, 5, 6, -2, 7, -1];
let newA = [];

for (let key in arr) {
   if (arr[key] > 0) {
      newA.push(arr[key]);
   } else {
      continue;
   }
}

console.log(arr); 
console.log(newA); 