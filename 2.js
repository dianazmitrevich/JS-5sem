'use strict'

// 1
const circleParameters = (radius) => {
   if (radius && radius > 0) {
      console.log("Площадь круга = ", (Math.PI * radius ** 2).toFixed(2));
      console.log("Диаметр круга = ", radius * 2);
      console.log("Длина окружности круга = ", (2 * Math.PI * radius).toFixed(2));
   }
}

// 2
const makeAnOrder = (cash) => {
   let productPrice;
   let orderPrice = 0;

   do {
      productPrice = +prompt("Стоимость товара (0 для выхода)");
      orderPrice += productPrice;

      if (productPrice <= cash) {
         if (productPrice == cash)
            break;

         cash -= productPrice;
      }
      else if (productPrice > cash) {
         orderPrice -= productPrice;
         console.log(`Выберите товар со стоимостью меньшей ${cash}`);
      }
   } while (productPrice !== 0)

   console.log(`Ваш заказ на сумму ${orderPrice} успешно принят`);
}

// 3
const task3 = (prop1 = "По умолчанию", prop2, prop3) => {
   prop3 = prompt("Введите параметр ", '');
   return prop1 + prop2 + prop3;
}

// 4
const task4 = () => {
   let studentArray = [];
   let student;

   while (confirm("Добавить студента?")) {
      student = prompt("Имя студента", '');

      if (student)
         studentArray.push(student);
   }

   console.log("Количество студентов = ", studentArray.length);
}

// 5
function params(a, b) {
   if (a && b) {
      if (a == b)
         return console.log(`Периметр квадрата со стороной ${a} = `, a * 4);
      else
         return console.log(`Площадь прямоугольника со сторонами ${a} и ${b} = `, a * b);
   }
}

(params = (a, b) => {
   if (a && b) {
      if (a == b)
         return console.log(`Периметр квадрата со стороной ${a} = `, a * 4);
      else
         return console.log(`Площадь прямоугольника со сторонами ${a} и ${b} = `, a * b);
   }
})(6, 3);

// 6
const task6 = () => {
   let letters = 5;
   let numbers = 3;

   let combinationsCount = Math.pow(26, letters) * Math.pow(10, numbers);
   let initialTimeToQuess = combinationsCount * 3;

   let secondsInMinute = 60;
   let secondsInHour = secondsInMinute * 60;
   let secondsInDay = secondsInHour * 24;
   let secondsInMonth = secondsInDay * 30;
   let secondsInYear = secondsInMonth * 12;

   let years = Math.floor(initialTimeToQuess / secondsInYear);
   let months = Math.floor((initialTimeToQuess % (years * secondsInYear)) / secondsInMonth);
   let days = Math.floor((initialTimeToQuess % (years * secondsInYear + months * secondsInMonth)) / secondsInDay);
   let hours = Math.floor((initialTimeToQuess % (years * secondsInYear + months * secondsInMonth + days * secondsInDay)) / secondsInHour);
   let minutes = Math.floor((initialTimeToQuess % (years * secondsInYear + months * secondsInMonth + days * secondsInDay + hours * secondsInHour)) / secondsInMinute);
   let seconds = initialTimeToQuess % (years * secondsInYear + months * secondsInMonth + days * secondsInDay + hours * secondsInHour + minutes * secondsInMinute);

   let timeToQuess = {
      years: years,
      months: months,
      days: days,
      hours: hours,
      minutes: minutes,
      seconds: seconds,
   };

   console.log(timeToQuess);
   console.log(`${timeToQuess.years} лет ${timeToQuess.months} месяцев ${timeToQuess.days} дней ${timeToQuess.hours} часов ${timeToQuess.minutes} минут ${timeToQuess.seconds} секунд`);
}