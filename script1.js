"use strict";

   let num = 35;

   if (num >= 10 && num <= 99) {

      num = String(num).split('');
      let summary = Number(num[0]) + Number(num[1])

    if (summary >= 9) {
         alert('двухзначно');}
	else {
         alert('однозначно')}
	
   }
