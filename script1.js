
console.log('||| 1 |||==');

function func() {
   return console.log('Hello world!');
};

console.log('||| 2 |||==');

func();

console.log('||| 3 |||==');

console.log(func);

console.log('||| 4 |||==');

func = 1234;

console.log(func);

console.log('||| 5 |||==');

function func1() {
   return 3;
};

console.log('||| 6 |||==');

let func2 = func1;

console.log('||| 7 |||==');

console.log(func1() + func2());

console.log('||| 8 |||==');

let func3 = function () {
   return 1;
};

console.log('||| 9 |||==');

let func4 = function () {
   return 2;
};

console.log('||| 10 |||==');

console.log(func3() + func4())