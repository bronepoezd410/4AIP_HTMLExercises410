"use strict";


console.log('====================== 1 ========================');

let num = '12345';
let arr = num.split('');
let sum = 0;

for (let digit of arr) {
   sum += Number(digit);
}

console.log(sum);

console.log('====================== 2 ========================');

let num1 = 12345;
let arr1 = String(num1).split('');
let sum1 = 0;

for (let digit of arr1) {
   sum1 += Number(digit);
}

console.log(sum1);

console.log('====================== 3 ========================');

let num2 = 12345;
let arr2 = String(num2).split('');
let sum2 = 0;

for (let digit of arr2) {
   sum2 += Number(digit);
}

console.log(sum2);

console.log('====================== 4 ========================');

let num3 = 12345;
let arr3 = String(num3).split('');

let sum3 = 0;
for (let digit of arr3) {
   sum3 += Number(digit);
}

console.log(sum3);

console.log('====================== 5 ========================');

let num4 = 12345;
let arr4 = String(num4).split('');
let prod = 1;

for (let digit of arr4) {
   prod *= Number(digit);
}

console.log(prod);