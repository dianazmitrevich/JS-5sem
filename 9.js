'use strict'

// 1
const backgroundYellow = {
   background: "yellow",
};

const radius = {
   radius: 20,
};

const sideLength = {
   side: 20,
};

const bigSquare = {
   side: 20,
};
bigSquare.__proto__ = backgroundYellow;

const smallSquare = {
   side: 10,
};
smallSquare.__proto__ = backgroundYellow;

const transparentCircle = {
   background: "transparent",
};
transparentCircle.__proto__ = radius;

const greenCircle = {
   background: "green",
};
greenCircle.__proto__ = radius;

const triangleOneLine = {
   lines: 1,
};
triangleOneLine.__proto__ = sideLength;

const triangleThreeLines = {
   lines: 3,
};
triangleThreeLines.__proto__ = sideLength;

// console.log(greenCircle);
// console.log(triangleThreeLines);
// console.log(Object.getPrototypeOf(smallSquare) === backgroundYellow);

// 2
class Validator {
   isEmail(email) {
      let regex = /[^@\s]+@[^@\s]+\.[^@\s]+/;
      return regex.test(String(email));
   }

   isDomain(domain) {
      let regex = /\.(by|бай)$/;
      return regex.test(domain);
   }

   isDate(date) {
      let regex = /^(0[1-9]|[12][0-9]|3[01])[- /.](0[1-9]|1[012])[- /.](19|20)\d\d$/;
      return regex.test(date);
   }

   isPhone(phone) {
      let regex = /((29|44)\d{7})/;
      return regex.test(phone);
   }
}

const validator = new Validator();
console.log(validator.isEmail("dina@gmail"));
console.log(validator.isDomain("dina.ru"));
console.log(validator.isDate("32.11.2022"));
console.log(validator.isPhone("291111111"));

// 3
class Student {
   constructor(name, surname, faculty, recordBookId) {
      this.name = name;
      this.surname = surname;
      this.faculty = faculty;
      this.recordBookId = recordBookId;
   }

   getFullName() {
      return `${this.name} ${this.surname}`;
   }

   getCourse() {
      const currentYear = new Date().getFullYear();
      const currentMonth = new Date().getMonth();
      const year = String(currentYear).slice(0, 2) + String(this.recordBookId).slice(2, 4);

      return currentMonth > 8 ? currentYear - year + 1 : currentYear - year;
   }

   static getDev(arr) {
      let count = 0;

      arr.forEach(item => {
         if (String(item.recordBookId)[1] == "3") count++;
      });

      return count;
   }
}

const faculties = [
   { id: 6, name: "ИД" },
   { id: 7, name: "ФИТ" },
];

const studentsArr = [
   new Student("Имя 1", "Фамилия 1", 7, 71201300),
   new Student("Имя 2", "Фамилия 2", 6, 62211300),
   new Student("Имя 3", "Фамилия 3", 7, 73201300),
   new Student("Имя 4", "Фамилия 4", 6, 64221300),
   new Student("Имя 5", "Фамилия 5", 7, 71211300),
   new Student("Имя 6", "Фамилия 6", 7, 72191300),
   new Student("Имя 7", "Фамилия 7", 7, 73231300),
   new Student("Имя 8", "Фамилия 8", 6, 64201300),
   new Student("Имя 9", "Фамилия 9", 7, 72201300),
   new Student("Имя 10", "Фамилия 10", 7, 73211300),
];

console.log(studentsArr[0].getFullName());
console.log(studentsArr[0].getCourse());

console.log(Student.getDev(studentsArr));

const app = document.querySelector(".app");
const table = document.createElement("table");

faculties.forEach(element => {
   let tr = document.createElement("tr");

   let td = document.createElement("td");
   td.setAttribute("colspan", 4);
   td.innerHTML += element.name;

   tr.append(td);

   let tr2 = document.createElement("tr");
   for (let i = 0; i < 4; i++) {
      let td2 = document.createElement("td");
      td2.innerHTML += `${i + 1} курс`;

      tr2.append(td2);
   }

   let tr3 = document.createElement("tr");
   for (let i = 0; i < 4; i++) {
      let td2 = document.createElement("td");
      td2.setAttribute("id", `${element.id}-${i + 1}`);

      tr3.append(td2);
   }

   table.append(tr);
   table.append(tr2);
   table.append(tr3);
});

app.append(table);

studentsArr.forEach((element) => {
   let cell = element.faculty + "-" + element.getCourse();
   let cellDOM = document.getElementById(cell);

   cellDOM.innerHTML += element.getFullName() + "<br>";
});