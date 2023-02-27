"use strict";
let test = 1;
		
if (test == true) {
	console.log('+++');
} else {
	console.log('---');
}
+++
let test = 0;
		
if (test == true) {
	console.log('+++');
} else {
	console.log('---');
}
---
let test = 1;
		
if (test == false) {
	console.log('+++');
} else {
	console.log('---');
}
---
let test = 1;
		
if (test != true) {
	console.log('+++');
} else {
	console.log('---');
}
---
let test = '';
		
if (test == false) {
	console.log('+++');
} else {
	console.log('---');
}
---
let test;
		
if (test == true) {
	console.log('+++');
} else {
	console.log('---');
}
+++
let test = 3 * 'a';
		
if (test == true) {
	console.log('+++');
} else {
	console.log('---');
}
---