"use strict";


// console.log('');

// let arr = [1, 2, 3, 2, 4, 3, 5, 6, 3, 2, 3];
// let count = 0;

// for (let i of arr) {
//    if (i == 3) {
//       count += 1
//    } else {
//       continue;
//    };
// };

// console.log(count);

// console.log('');

let arr = [1, 2, 3, 2, 4, 3, 5, 6, 3, 2, 3];
let count = 0;

for (let i of arr) {
   if (i == 3 || i == 2) {
      count += 1
   } else {
      continue;
   };
};

console.log(count);