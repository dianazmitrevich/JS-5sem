'use strict'

// 1
function task1() {
   if (arguments.length <= 3) {
      let str = "";

      for (let i = 0; i < arguments.length; i++) {
         str += arguments[i];
      }

      console.log(str);
   } else if (arguments.length > 3 && arguments.length <= 5) {
      for (let i = 0; i < arguments.length; i++) {
         console.log(typeof arguments[i]);
      }
   } else if (arguments.length > 5 && arguments.length <= 7) {
      console.log(arguments.length);
   } else {
      console.log("Много аргументов")
   }
}

// task1(1, 3, "3");

// 2

// window.a;
// alert(a);

// alert(a);
// window.a = 2;

// alert(a);
// window.a = 2;
// let a;

// alert(a);
// window.a = 2;
// var a;

// alert(a);
// let a = 2;

// let a = 2;
// window.a = 3;
// alert(a);

// var a = 2;
// window.a = 3;
// alert(a);

// 3
function sum(a) {    // a: 5 -> outer sum: function -> outer null
   let b = a + 1;

   return a + b;
}

// 4
let s = 5;

function sum() {
   alert(s); // по ссылке идет во внешнее лексическое окружение и получает переменную
}

// 5
function makeCounter() {
   let currentCount = 1;

   return function () {   // (*)
      return currentCount++;
   };
}

let counter = makeCounter();
alert(counter()); // 1
alert(counter()); // 2
alert(counter()); // 3

let counter2 = makeCounter();
alert(counter2()); // 1

// let currentCount = 1;

// function makeCounter() {
//    return function () {
//       return currentCount++;
//    }
// }

// let counter = makeCounter();
// let counter2 = makeCounter();

// alert(counter()); // 1
// alert(counter()); // 2

// alert(counter2()); // 3
// alert(counter2()); // 4

// 6
function sum(a, b) {
   alert(`a = ${a}, b = ${b}`);

   return a + b;
}

sum.s = sum(2, 3);

alert(sum.s);

// 7
let value = 0;

function f() {
   if (1) {
      value = true;
   } else {
      let value = false;
   }

   alert(value);
}

f();

// 8
console.log(task1.name, sum.name, makeCounter.name, f.name);