'use strict'

// 1
let user = {
   name: "Dina",
   yes: 0,
   no: 0,
   get rating() {
      return this.yes - this.no;
   },
}

function questioning(b, user) {
   if (b) {
      let answer = confirm(`${user.name}, ${user.yes}, ${user.no}, ${user.rating}`);

      answer ? user.yes++ : user.no++;

      if (user.yes > 10) {
         b = false;
      }

      questioning(b, user);
   }
}

// questioning(true, user);

// 2
function volume(x) {
   return (y) => {
      return (z) => {
         return x * y * z;
      }
   }
}

function volumeDiff(x) {
   return (y, z) => {
      return x * y * z;
   }
}

console.log(volume(1)(2)(3));

const sameX = volumeDiff(4);
console.log(sameX(5, 6));
console.log(sameX(7, 8));

// 3
let s = +prompt("Сумма покупки", "");

function discount(discount) {
   return (s) => {
      return s * discount;
   }
}

if (s > 400) {
   let sale10 = discount(0.2);
   console.log(sale10(s));
} else if (s > 200) {
   let sale20 = discount(0.1);
   console.log(sale20(s));
}

// 4
let steps = 0;
let obj = {
   x: 0,
   y: 0
}

function* position() {
   yield obj.x;
   yield obj.y;
   return;
}

function moveObject() {
   steps++;
   let direction = prompt("Направление движения (0 чтобы выйти)", "");

   if (direction == 0) return;
   else if (direction == "u") obj.y += 10;
   else if (direction == "d") obj.y -= 10;
   else if (direction == "l") obj.x += 10;
   else if (direction == "r") obj.x -= 10;

   let generator = position();

   for (let value of generator) {
      console.log(steps + " шаг", value);
   }

   moveObject();
}

moveObject();