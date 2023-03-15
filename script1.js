"use strict";

let obj = {
   1: {
      1: 11,
      2: 12,
      3: 13,
   },
   2: {
      1: 21,
      2: 22,
      3: 23,
   },
   3: {
      1: 24,
      2: 25,
      3: 26,
   },
};

let result = 0;

for (let key in obj) {
   let obj3 = obj[key];
   for (let obj1 in obj3) {
      result += obj3[obj1]
   };
};

console.log(result)
