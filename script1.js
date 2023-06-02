
console.log("||| 1 |||==");

function func1() {
   return 1;
}

function func2() {
   return 2;
}

function func3() {
   return 3;
}

function test(num1, num2, num3) {
   return num1 + num2 + num3;
}

console.log(test(func1(), func2(), func3()));

console.log("||| 2 |||==");

let func4 = () => {
   return 1;
};

let func5 = () => {
   return 2;
};

let func6 = () => {
   return 3;
};

let test1 = (num1, num2, num3) => {
   return num1 + num2 + num3;
};

console.log(test1(func4(), func5(), func6()));

console.log("||| 3 |||==");

test(function (num) {
   return num ** 3;
});

function func() {
   console.log(func(3));
}

console.log("||| 4 |||==");

let func = function () {
   console.log(func(3));
};

console.log("||| 5 |||==");

function test(num, func1, func2) {
   return func1(num) + func2(num);
}
test(
   2,
   function (num) {
      return num * num;
   },
   function (num) {
      return num * num * num;
   }
);