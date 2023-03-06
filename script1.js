"use strict";
// for (let i = 0; i <= 10; i++) {
//    console.log(i);
// }
// for (let i = 10; i >= 0; i--) {
//    console.log(i);
// }
// for (let i = 10; i >= 0; i--) {
//    console.log(i);
// }
// let i = 0;
// while (i <= 10) {
//    console.log(i);
//    i++;
// }
// let res = 0;
// for (let i = 1; i <= 10; i++) {
//    res += i;
// }
// console.log(res);
// let res = 1;
// for (let i = 1; i <= 10; i++) {
//    res *= i;
// }
// console.log(res);
// let arr = ['1', '2', '3', '4', '5'];
// let sum = 0;
// for (let elem of arr) {
//    sum += Number(elem);
// }
// console.log(sum); 
// let arr = ['1', '2', '3', '4', '5'];
// let sum = 0;
// for (let elem of arr) {
//    sum += Number(elem);
// }
// console.log(sum1); 
// let arr = ['1', '2', '3', '4', '5'];
// let sum = 0;
// for (let elem of arr) {
//    sum2 += Number(elem);
// }
// console.log(sum);
// let arr= ['1', '2', '3', '4', '5'];
// let sum = 0;
// for (let i = 0; i <= arr.length - 1; i++) {
//    sum += Number(arr[i]);
// }
// console.log(sum);
// let arr = ['1', '2', '3', '4', '5'];
// let sum = 0;
// for (let i = 0; i < arr.length; i++) {
//    sum += Number(arr[i]);
// }
// console.log(sum);
// let arr = ['1', '2', '3', '4', '5'];
// let sum = 0;
// for (let i = 0; i < arr.length; i++) {
//    sum += Number(arr[i]);
// }
// console.log(sum);
// let arr = [1, 2, 3, 4, 5];
// for (let i = 0; i < arr.length; i++) {
//    arr[i] = arr[i] ** 2;
// }
// console.log(arr);
// let arr = [];
// for (let i = 1; i <= 5; i++) {
//    arr.push(i);
// }
// console.log(arr);
// let obj = { a: 1, b: 2, c: 3 };
// let sum = 0;
// for (let elem in obj) {
//    sum += obj[elem];
// }
// console.log(sum);
// let obj = { a: 1, b: 2, c: 3 };
// let sum = 0;
// for (let key in obj) {
//    sum += obj[key];
// }
// console.log(sum8);
// let arr = [1, 2, 3, 4, 5];
// let flag = false;
// for (let elem of arr) {
//    if (elem === 3) {
//       flag = true;
//       break;
//    } else {
//       continue;
//    };
// };

// if (flag) {
//    console.log('+++')
// } else {
//    console.log('---')
// };

// let arr = [];

// for (let i = 1; i <= 5; i++) {
//    arr.push(i);
// };

// console.log(arr);


// let arr = [1, 2, 3, 4, 5];
// let res = false;

// for (let elem of arr) {
//    if (elem === 3) {
//       res = true;
//       break;
//    } else {
//       continue;
//    };
// };

// console.log(res);

// let arr = [1, 2, 3, 4, 5];

// for (let elem of arr) {
//    if (elem % 2 == 0) {
//       console.log(elem);
//    }
// }

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let newArr = []

for (let elem of arr13) {
   if (elem % 2 != 0) {
      newArr.push(elem);
   } else {
      continue;
   }
}

console.log(newArr);