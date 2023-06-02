
console.log("||| 1 |||==");

!(function () {
   console.log("!");
})(); // !

console.log("||| 2 |||==");

/*function() {
console.log('!');
 }(); // error
 */
console.log("||| 3 |||==");

let result = (function () {
   return "!";
})();

console.log(result); // !

console.log("||| 4 |||==");

let result4 = function () {
   return "!";
};

console.log(result4); // код функции

console.log("||| 5 |||==");

let result5 = function () {
   return "!";
};

console.log(result5()); // !

console.log("||| 6 |||==");

let result6 =
   (function () {
      return 1;
   })() +
   (function () {
      return 2;
   })();

console.log(result6); // 3

console.log("||| 7 |||==");

let result7 = (function () {
   return "!";
})();

console.log(result7); // !

console.log("||| 8 |||==");

let result8 = (function () {
   return "!";
})();

console.log(result8); // !

console.log("||| 9 |||==");

let result9 = function () {
   return "!";
};

console.log(result9); // код функции

console.log("||| 10 |||==");

let result10 = function () {
   return "!";
};

console.log(result10()); // !

console.log("||| 11 |||==");

(function (num1, num2) {
   console.log(num1 + num2);
})(1, 2); // 3

console.log("||| 12 |||==");

(function () {
   return function () {
      return function () {
         console.log("!");
      };
   };
})()()();

console.log("||| 13 |||==");

(function (num1) {
   return function (num2) {
      console.log(num1 + num2);
   };
})(1)(2);

console.log("||| 14 |||==");

(function (num1) {
   return function (num2) {
      return function (num3) {
         console.log(num1 + num2 + num3);
      };
   };
})(1)(2)(3);

console.log("||| 15 |||==");

let str = "str";

(function () {
   console.log(1);
})(); // 1

console.log("||| 16 |||==");

let str3 = "str"

(function () {
   console.log(1);
})(); // error
