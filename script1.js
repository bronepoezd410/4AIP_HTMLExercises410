function func11() {
  return 3;
}
function func12() {
  return 5;
  }
console.log(func11() + func12());
// 2
function sum2(arr) {
  let res = 0;
for (let elem of arr) {
  res += elem;
}
  return res;
}
console.log(sum2([1, 2, 3, 4, 5]));
// 3
let arr = [1, 2, 3, 4, 5];
function func3(array) {
  let res = 0;
for (let elem of array) {
  res += elem;
};
return res;
};
console.log(func3(arr))
// 4
let arr5 = [1, 2, 3, 4, 5];
console.log(sum5(arr5));
function sum5(arr) {
  let sum = 0;
for (let elem of arr) {
  sum += elem;
}
return sum;
}