'use strict'

function shoe(id, size, color, price) {
   this.id = id;
   this.size = size;
   this.color = color;
   this.price = price;
   this.sale = 0;
   this.finalPrice = this.price;

   Object.defineProperty(this, "finalPrice", {
      get() {
         return this.price - (this.price * this.sale / 100);
      },
      set() {
         return this.finalPrice;
      }
   });
};

const products = {
   shoes: {
      boots: [
         new shoe(1, 36, "brown", 100),
         new shoe(2, 37, "brown", 100),
      ],
      sneakers: [
         new shoe(3, 38, "white", 200),
      ],
      sandals: [
         new shoe(4, 38, "black", 50),
      ]
   }
};

Object.defineProperty(shoe, "id", {
   writable: false,
   configurable: false,
});

Object.defineProperty(shoe, "size", {
   writable: false,
});

Object.defineProperty(shoe, "color", {
   writable: false,
});

products[Symbol.iterator] = function () {
   const list = [...this.shoes.boots, ...this.shoes.sneakers, ...this.shoes.sandals];

   return {
      pos: 0,
      next() {
         if (this.pos < list.length) {
            return { done: false, value: list[this.pos++] };
         } else {
            return { done: true };
         }
      }
   }
};

products["sortByRange"] = function (from, to) {
   const arr = [];

   for (let item of products) {
      if (item.price >= from && item.price <= to) {
         arr.push(item.id);
      }
   }

   console.log(arr);
};

products["sortBySize"] = function (size) {
   const arr = [];

   for (let item of products) {
      if (item.size == size) {
         arr.push(item.id);
      }
   }

   console.log(arr);
};

products["sortByColor"] = function (color) {
   const arr = [];

   for (let item of products) {
      if (item.color == color) {
         arr.push(item.id);
      }
   }

   console.log(arr);
};

products.sortByRange(50, 150);
products.sortBySize(38);
products.sortByColor("black");