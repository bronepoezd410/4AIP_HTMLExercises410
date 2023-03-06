"use strict";


// console.log('');

// let arr = ['понедельник', 'вторник', 'среда', 'четверг', 'пятница', 'суббота', 'воскресенье'];
// let arr = [1, 2, 3, 4, 5, 6, 7];
// let newObj = {};

// for (let i = 0; i <= 6; i++) {
//    let key = arr[i];
//    let value = arr[i]

//    newObj[key] = value
// };

// console.log(newObj);

// console.log('');

// let obj = { a: 1, b: 2, c: 3, d: 4, e: 5 };
// let newObj = {};

// for (let key in obj) {

//    if (obj[key] % 2 == 0) {

//       let newKey = key;
//       let value = obj[key];
//       newObj[newKey] = value;

//    } else {
//       continue
//    };
// };

// console.log(newObj);

// console.log('');

let obj = { a: 1, b: 2, c: 3, d: 4, e: 5 };
let newObj = {};

for (let key in obj) {

   let newKey = obj[key];
   let newValue = key;

   newObj[newKey] = newValue;
};
console.log(obj);
console.log(newObj);