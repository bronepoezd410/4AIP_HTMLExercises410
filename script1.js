"use strict";

   let test = true;
   let test = true;

   if (test && test) {
      console.log('+++');
   } else {
      console.log('---');
   }
+++

   let test = true;
   let test = true;

   if (test && (!test)) {
      console.log('+++');
   } else {
      console.log('---');
   }
---

   let test = true;
   let test = true;

   if ((!test) && (!test)) {
      console.log('+++');
   } else {
      console.log('---'); 
    
   }

   ---

   let test = true;
   let test = true;

   if ((!test) && test) {
      console.log('+++');
   } else {
      console.log('---');
   }
---

   let test = true;
   let test0 = true;
   let test1 = true;

   if (test && test0 && test1) {
      console.log('+++');
   } else {
      console.log('---');
   }
+++

   let test2 = true;
   let test = true;
   let test = true;

   if (test2 || test && test) {
      console.log('+++');
   } else {
      console.log('---');
   }
   +++

   let test = true;
   let test = true;
   let test = true;

   if (test || (!test) && (!test)) {
      console.log('+++');
   } else {
      console.log('---'); 
   }
   +++
