'use strict'

// 1
const task1 = () => {
   let data = prompt("Данные", '');

   if ((+data) % 1 === 0) {
      console.log(`Данные в 16-ричной с/с - ${(+data).toString(16).toUpperCase()}`);
   }
   else if (isNaN(+data)) {
      console.log(
         `Верхний регистр - ${data.toUpperCase()}
         \nНижний регистр - ${data.toLowerCase()}`
      );
   }
   else if ((+data) % 1 !== 0) {
      console.log(
         `Наибольшее целое - ${Math.ceil(+data)}
         \nНаименьшее целое - ${Math.floor(+data)}
         \nБлижайшее целое - ${Math.round(+data)}`
      );
   }
}

// 2
const task2 = () => {
   const word = "собака";
   let quess = prompt("с_б_ка", '');
   let errors = "";

   for (let i = 0; i < word.length; i++) {
      if (word.charAt(i) != quess.charAt(i))
         errors += i + 1 + " ";
   }

   if (errors)
      console.log(`Ошибка(и) в символе(ах) - ${errors}`)
   else console.log("Верно!");
}

// 3
const task3 = () => {
   const a = +prompt("Первый катет", '');
   const b = +prompt("Второй катет", '');
   const c = Math.sqrt(a ** 2 + b ** 2);

   let square = .5 * a * b;
   let perimeter = a + b + c;
   let height = a * b / c;
   let cos = b / c;
   let sin = a / c;
   let tg = a / b;
   let ctg = b / a;

   console.log(
      `Площадь - ${square}
      \nПериметр - ${perimeter}
      \nВысота - ${height}
      \nКосинус - ${cos}
      \nСинус - ${sin}
      \nТангенс - ${tg}
      \nКотангенс - ${ctg}`
   );
}

// 4
const task4 = () => {
   let arr = [1, [1, 2, [3, 4]], [2, 4]];

   function concatArr(arr, depth = 1) {
      return depth > 0 ? arr.reduce((previous, current) => previous.concat(Array.isArray(current) ? concatArr(current, depth - 1) : current), [])
         : arr;
   };

   let res = concatArr(arr, Infinity);
   console.log(res);
}

// 5
const task5 = () => {
   let arr = [1, [1, 2, [3, 4]], [2, 4]];

   function sumArr(arr, depth = 1) {
      return depth > 0 ? arr.reduce((previous, current) => previous + (Array.isArray(current) ? sumArr(current, depth - 1) : current), 0)
         : arr;
   };

   let res = sumArr(arr, Infinity);
   console.log(res);
}

// 6
const task6 = () => {
   const students = [
      { name: "st1", age: 18, groupId: 1 },
      { name: "st2", age: 16, groupId: 1 },
      { name: "st3", age: 17, groupId: 1 },
      { name: "st4", age: 19, groupId: 3 },
      { name: "st5", age: 16, groupId: 2 },
      { name: "st6", age: 19, groupId: 1 }
   ];
   const groups = {};
   let oldStudents = students.filter(student => student.age > 17);

   oldStudents.forEach(student => {
      if (Object.keys(groups).includes(String(student.groupId))) {
         groups[student.groupId].push(student.name);
      }
      else {
         Object.assign(groups, { [student.groupId]: [student.name] });
      }
   });

   console.log(groups);
}

// 7
const task7 = () => {
   const str = "ABC";
   let total1 = "";

   for (let i in str)
      total1 += str.charCodeAt(i);

   let total2 = total1.replace(7, 1);

   console.log(`${total1} - ${total2} = ${total1 - total2}`);
}