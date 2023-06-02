
console.log("||| 1 |||==");

let arr = {
   a: 1,
   b: { c: 2, d: 3, e: 4 },
   f: { g: 5, j: 6, k: { l: 7, m: { n: 8, o: 9 } } },
};

function func(obj) {
   for (let elem in obj) {
      if (typeof obj[elem] == "object") {
         func(obj[elem]);
      } else {
         console.log(obj[elem]);
      }
   }
}

func(arr);

console.log("||| 2 |||==");

let arr2 = [1, [2, 7, 8], [3, 4, [5, [6, 7]]]];

let newArr = [];

function func2(array) {
   for (let elem of array) {
      if (typeof elem == "object") {
         func2(elem);
      } else {
         newArr.push(elem);
      }
   }
   return newArr;
}

console.log(func2(arr2));

console.log("||| 3 |||==");

let obj = {
   a: 1,
   b: { c: 2, d: 3, e: 4 },
   f: { g: 5, j: 6, k: { l: 7, m: { n: 8, o: 9 } } },
};

function func3(obj) {
   let sum = 0;

   for (let elem in obj) {
      if (typeof obj[elem] == "object") {
         sum += func3(obj[elem]);
      } else {
         sum += obj[elem];
      }
   }

   return sum;
}

console.log(func3(obj));

console.log("||| 4 |||==");

let str = ["a", ["b", "c", "d"], ["e", "f", ["g", ["j", "k"]]]];
let newStr = "";

function func4(str) {
   let sum = "";

   for (let elem of str) {
      if (typeof elem == "object") {
         sum += func4(elem);
      } else {
         sum += elem;
      }
   }

   return sum;
}

console.log(func4(str));

console.log("||| 5 |||==");

let arr5 = [1, [2, 7, 8], [3, 4], [5, [6, 7]]];

function func5(arr) {
   for (let i = 0; i < arr.length; i++) {
      if (typeof arr[i] == "object") {
           func5(arr[i]);
      } else {
         arr[i] = Math.pow(arr[i], 2);
      }
   };
   return arr;
}

console.log(func5(arr5));
