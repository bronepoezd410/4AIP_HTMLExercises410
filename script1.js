
console.log('||| 1 |||==');

function func1() {
   console.log('!');
};

console.log('||| 2 |||==');

let func = function () {
   console.log('!');
};



console.log('||| 3 |||==');

func(); //выведет '!'

function func() {
   console.log('!');
}

console.log('||| 4 |||==');

func(); 

let func = function () {
   console.log('!');
};

console.log('||| 5 |||==');

let func1 = function () {
   console.log('!')
};

let func2 = function () {
   console.log('!')
};

function func3() {
   console.log('!')
};