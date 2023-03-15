"use strict";

function func(num = 5) {
   console.log(num * num);
}

func();
func(6);
func(1); 


function function1(num1 = 0, num2 = 0) {
   console.log(num1 + num2);
};

function1(2, 3); 
function1(3);    
function1();    