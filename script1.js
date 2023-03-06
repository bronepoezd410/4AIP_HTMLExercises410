"use strict";
for (let i = 1; i <= 9; i++) {
   for (let k = 1; k <= 3; k++) {
      document.write(i);
   };
};

document.write('');

for (let i = 1; i <= 3; i++) {
   document.write(' ')
   for (let k = 1; k <= 3; k++) {
      document.write(i + k + ' ');
   };
};