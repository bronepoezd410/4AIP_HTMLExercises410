
console.log('||| 1 |||==');

function func() {
   let num = 5;
   return num;
}

console.log(num); // error

console.log('||| 2 |||==');

function func2() {
   let num = 5;
   return num;
}

console.log(func2()); // 5
