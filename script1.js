"use strict";

// let arr = [1, 2, 3, 4, 0, 5, 6];

// for (let i = 0; i <= arr.length - 1; i++) {
//    if (arr[i] == 0) {
//       break;
//    } else {
//       console.log(arr[i]);
//    };
// };

// let arr = [1, 2, 3, 4, -2, 5, 6];
// let res = 0;

// for (let i = 0; i <= arr.length - 1; i++) {
//    if (arr[i] < 0) {
//       break;
//    } else {
//       res += arr[i];
//    };
// };
// console.log(res)


// let arr = [1, 2, 6, 4, 3, 5, 6];
// let res = 0;

// for (let i = 0; i <= arr.length - 1; i++) {
//    if (arr[i] == 3) {
//       console.log(i)
//       break;
//    } else {
//       continue;
//    };
// };

let num = 1, i = 1;

for (i; ; i++) {
   if (num + i > 100) {
      break;
   } else {
      num += i;
   };
};
console.log(num);
console.log(i);