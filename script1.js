          
         let date = new Date();

         console.log("||| 1 |||==");

         console.log(`Номер текущего дня недели ${date.getDay()}`);

         console.log("||| 2 |||==");

         if (date.getDay() == 0 || date.getDay() == 6) {
          console.log(`${date.getDay()} - Выходной день`)
         } else {
          console.log(`${date.getDay()} - Рабочий день`)
         }

         console.log("||| 3 |||==");

         console.log(`До воскресенья осталось ${6 - date.getDay()}`)