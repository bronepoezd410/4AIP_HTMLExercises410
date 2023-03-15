"use strict";

let data = {
   1: [
      'data11',
      'data12',
      'data13',
   ],
   2: [
      'data21',
      'data22',
      'data23',
   ],
   3: [
      'data31',
      'data32',
      'data33',
   ],
   4: [
      'data41',
      'data42',
      'data43',
   ],
};

for (let key in data) {
   let fullData = data[key]
   for (let item of fullData) {
      console.log(item)
   }
};

let data1 = [
   {
      1: 'data11',
      2: 'data12',
      3: 'data13',
   },
   {
      1: 'data21',
      2: 'data22',
      3: 'data33',
   },
   {
      1: 'data31',
      2: 'data32',
      3: 'data33',
   },
];

for (let key of data1) {
   for (let item in key) {
      console.log(key[item])
   }
};
