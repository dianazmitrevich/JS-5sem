'use strict'

let users = ["User1", "Dina", "User2", "User3", "Pan", "User5", "User4"];
let usersSet = new Set(["User1", "Dina", "User2", "User3", "Pan", "User5", "User4"]);

// 1
const task1 = (method) => {
   switch (method) {
      case "Array": {
         for (; ;) {
            let name = prompt("Добавить пользователя? (0 для выхода)", "");

            if (+name === 0 || users.includes(name)) {
               console.log("Есть такой");
               break;
            }

            users.push(name);
            console.log("Пользователь добавлен");
         }

         break;
      }
      case "Set": {
         for (; ;) {
            let name = prompt("Добавить пользователя? (0 для выхода)", "");

            if (+name === 0 || usersSet.has(name)) {
               console.log("Есть такой");
               break;
            }

            usersSet.add(name);
            console.log("Пользователь добавлен");
         }

         break;
      }
   }
}

// task1("Array");
// task1("Set");

// 2
const task2 = (m) => {
   let temp = [];

   switch (m) {
      case "Array": {
         arrSortBy("asc", users);
         arrSortBy("desc", users);
         arrSortBy("length", users, 3);
         arrSortBy("letter", users, 0, "u");

         break;
      }
      case "Set": {
         setSortBy("asc", usersSet);
         setSortBy("desc", usersSet);
         setSortBy("length", usersSet, 3);
         setSortBy("letter", usersSet, 0, "u");

         break;
      }
   }

   function arrSortBy(method, arr, length = 0, letter = 0) {
      switch (method) {
         case "asc": {
            console.log(arr.sort((a, b) => a > b ? 1 : -1));
            break;
         }

         case "desc": {
            console.log(arr.sort((a, b) => a > b ? -1 : 1));
            break;
         }

         case "length": {
            temp = [];

            if (length !== 0) {
               users.forEach((item) => {
                  if (item.length == length) {
                     temp.push(item);
                  }
               });

               console.log(temp);
            }
            break;
         }

         case "letter": {
            temp = [];

            if (letter !== 0) {
               users.forEach((item) => {
                  if (item[0].toLowerCase() == letter) {
                     temp.push(item);
                  }
               });

               console.log(temp);
            }
            break;
         }
      }
   }

   function setSortBy(method, arr, length = 0, letter = 0) {
      const newArr = Array.from(arr);

      switch (method) {
         case "asc": {
            console.log(new Set(newArr.sort((a, b) => a > b ? 1 : -1)));
            break;
         }

         case "desc": {
            console.log(new Set(newArr.sort((a, b) => a > b ? -1 : 1)));
            break;
         }

         case "length": {
            temp = new Set();

            if (length !== 0) {
               usersSet.forEach((item) => {
                  if (item.length == length) {
                     temp.add(item);
                  }
               });

               console.log(temp);
            }
            break;
         }

         case "letter": {
            temp = new Set();

            if (letter !== 0) {
               usersSet.forEach((item) => {
                  if (item[0].toLowerCase() == letter) {
                     temp.add(item);
                  }
               });

               console.log(temp);
            }
            break;
         }
      }
   }
}

// task2("Array");
// task2("Set");

// 4
const getGamesResults = (n) => {
   let results = [];

   for (let i = 0; i < n; i++) {
      const players = addPlayers(20);
      const winners = findWinners(players);

      if (results.length > 9) {
         results = results.slice(1);
      }

      results.push(winners);
   }

   console.log(results);
}

const addPlayers = (n) => {
   let players = new Set();
   let results = new Map();

   while (players.size < n) {
      let id = Math.floor(Math.random() * (9999 - 1) + 1);

      players.add(id);
   }

   players.forEach((item) => {
      let result = Math.floor(Math.random() * 50);

      results.set({ id: item }, result);
   });

   return results;
}

const findWinners = (res) => {
   let results = Array.from(res);
   let winners = new WeakSet();

   results.sort((a, b) => a[1] > b[1] ? -1 : 1);

   winners.add(results[0])
      .add(results[1])
      .add(results[2]);

   return winners;
}

getGamesResults(20);