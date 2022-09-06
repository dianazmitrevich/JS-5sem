'use strict'

// 1
const task1 = () => {
   function pow(x, n) {
      let result = 1;
      for (var i = 0; i < n; i++) {
         result *= x;
      }
      return result;
   }

   let x = prompt("x?", '');
   let n = prompt("n?", '');

   if (n < 0)
      alert(`Степень ${n} не поддерживается, введите целую степень, большую 0`);
   else
      alert(pow(x, n));
}

// 2
const task2 = () => {
   let username = "dianazmitrevich";
   let city = "Minsk";
   let birthYear = 2002;
   const COLOR_RED = "#F00";
   let userAnswer = confirm("Вопросы?");
   let maxNum = Infinity;
   let num = 532;
   let perimeter = 120 + "мм";
   alert("Введенные данные неверны");
}

// 3
let a = 5; // number
let name = "Name"; // string
let i = 0; // number
let double = 0.23; // number
let result = 1 / 0; // number
let answer = true; // boolean
let no = null; // object

// 4, 5
const task45 = () => {
   // 4
   let side1 = 45;
   let side2 = 21;

   let square = side1 * side2;
   console.log("square", square);

   // 5
   let quantity = Math.floor(side1 / 5) * Math.floor(side2 / 5);
   console.log("quantity", quantity);
}

// 6
let iSix = 2;
let aSix = ++iSix; // 3
let bSix = iSix++; // 2

// 7
const task7 = () => {
   console.log("7-1", "Привет" > "привет" ? true : false);
   console.log("7-2", "Привет" > "Пока" ? true : false);
   console.log("7-3", 45 > "53" ? true : false);
   console.log("7-4", false > 3 ? true : false);
   console.log("7-5", true > "3" ? true : false);
   console.log("7-6", 3 > "5мм" ? true : false);
}

// 8
const task8 = () => {
   let value = prompt("Введите число меньшее 10", '');
   if (value >= 10)
      alert("Введенные данные неверные");
}

// 9
const task9 = () => {
   let key = "314";
   let quess = prompt("Попробуйте угадать 3-значное число", '');
   quess == key ? console.log("Ответ верный") : console.log("Попробуйте еще раз");
}

// 10
const task10 = () => {
   let login = "student";
   let password = "fitfit";

   let loginQuess = prompt("Логин", '');
   let passwordQuess = prompt("Пароль", '');

   loginQuess == login && passwordQuess == password ? console.log("Вход выполнен успешно") : console.log("Логин или пароль неверный");
}

// 11
const task11 = () => {
   let MathExam = false;
   let EnglishExam = false;
   let RussianExam = false;

   if (MathExam && EnglishExam && RussianExam)
      console.log("Вы сдали сессию!");
   else if (!MathExam && !EnglishExam && !RussianExam)
      console.log("Увы, вас скоро отчислят");
   else
      console.log("Вас ожидает пересдача");

   /*let examsArray = ['F', 'F', 'F'];
   let examsResult = examsArray.join('');

   if (!examsResult.includes('T'))
      console.log("Увы, вас скоро отчислят");
   else if (!examsResult.includes('F'))
      console.log("Вы сдали сессию!");
   else
      console.log("Вас ожидает пересдача");*/
}
task11();

// 12
const task12 = () => {
   let aNumber = prompt("a =", '');
   let bNumber = prompt("b =", '');

   alert(`Сумма чисел a и b = ${+aNumber + +bNumber}`);
}

// 13
const task13 = () => {
   let operations = [
      "true + true",
      "0 + '5'",
      "5 + 'мм'",
      "8 / Infinity",
      "9 * '\\n9'",
      "null - 1",
      "'5' - 2",
      "'5px' - 3",
      "true - 3",
      "7 || 0"
   ];
   console.log(operations[3]);
   for (const i in operations) {
      console.log(`${operations[i]}`, eval(operations[i]));
   }
}

// 14
const task14 = () => {
   let arrResult = [];

   for (let i = 1; i <= 10; i++) {
      if (i % 2 == 0) {
         let temp = i + 2;
         arrResult.push(temp);
      }
      else arrResult.push(i + "мм");
   }

   console.log(arrResult);
}

// 15
const task15 = () => {
   let inputNum;

   do
      inputNum = prompt("Введите число меньшее 100", '')
   while (inputNum < 100);
}

// 16
const task16 = () => {
   let weekdays = [
      "Понедельник",
      "Вторник",
      "Среда",
      "Четверг",
      "Пятница",
      "Суббота",
      "Воскресенье"
   ];
   let choosenDay = prompt("Введите номер дня недели (1-7)", '');

   if (choosenDay > 0 && choosenDay < 8)
      console.log("weekdays", weekdays[choosenDay - 1]);
}