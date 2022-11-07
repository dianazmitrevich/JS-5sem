'use strict'

// 1
const task1 = (comment, n) => {
   let temp1 = comment;
   let temp2 = "";
   let result = "";

   if (comment.length > n) {
      temp1 = comment.substr(0, n);
   }

   temp1 = temp1.replace(/кот[\S]*/g, "*");

   let pos = 0;
   let start = 0;

   while (temp1.indexOf("собак", pos) !== -1) {
      pos = temp1.indexOf("собак", pos);

      temp2 += temp1.slice(start, pos) + temp1.charAt(pos).toUpperCase();
      start = pos + 1;

      if (temp1.indexOf("собак", start) == -1) {
         temp2 += temp1.slice(start);
      }

      pos++;
   }

   result = temp2.replace(/([\s]+пес[\s]+)|([\s]+пес$)/g, " многоуважаемый пес ");

   console.log(result.trim());
}

// task1("собака и кот называли своего друга пес", 100);

// 2
const task2 = (name) => {
   const filler = "***";
   const app = document.querySelector(".app");
   let element1 = document.createElement("p");
   let element2 = document.createElement("p");
   element2.style = "width: 100%; text-align: right;";
   let start = 0;
   let pos = 0;

   if (name.indexOf(" ") == -1) {
      element1.textContent = filler + name + filler;
      return app.append(element1);
   } else {
      while (name.indexOf(" ", pos) !== -1) {
         pos = name.indexOf(" ", pos);

         element2.append(name.substr(start, pos - start));
         element2.append(document.createElement("br"));
         start = pos + 1;

         pos++;
      }
      element2.append(name.substr(start));

      return app.append(element2);
   }
}

// 3
const task3 = () => {
   let weekdays = {
      1: "Понедельник",
      2: "Вторник",
      3: "Среда",
      4: "Четверг",
      5: "Пятница",
      6: "Суббота",
      7: "Воскресенье"
   };
   let oddDays = {};
   let oddDaysArr = [];
   let choosenDay = prompt("Введите номер дня недели (1-7)", "");

   if (choosenDay > 0 && choosenDay < 8)
      console.log(weekdays[choosenDay]);

   for (let i = 1; i < 8; i++) {
      if (i % 2 !== 0)
         oddDaysArr.push(weekdays[i]);
   }
   oddDays.days = oddDaysArr;
   oddDays.count = oddDaysArr.length;

   console.log(oddDays);
}

// 4
const task4 = () => {
   let slider = {
      header: "Первый слайдер",
      isButtonsShown: true,
      buttonSize: {
         width: 10,
      },
      slidesInARow: 2,
      width: 1900,
      height: 400
   };
   let sliderCopy = {};
   let margin = 5;

   console.log(slider.header + " =", getSlideWidth(slider));

   Object.assign(sliderCopy, slider);
   sliderCopy.header = "Второй слайдер";
   sliderCopy.slidesInARow = 6;

   console.log(sliderCopy.header + " =", getSlideWidth(sliderCopy));

   function getSlideWidth(slider) {
      return (slider.width - (slider.slidesInARow - 1) * margin) / slider.slidesInARow;
   }
}

// 5
const task5 = () => {
   const app = document.querySelector(".app");
   let button = {
      text: "Кнопка",
      width: 100,
      height: 30,
      background: "red",
      color: "white"
   };
   let anchor = {
      text: "Ссылка",
      size: 18,
      font: "Consolas",
      background: "transparent",
      color: "black"
   };
   let tempTemplate = {};

   let buttonInstance = createElement(button);

   Object.assign(tempTemplate, button);
   tempTemplate.background = "yellow";
   buttonInstance = createElement(tempTemplate);

   let anchorInstance = createElement(anchor);

   Object.assign(tempTemplate, anchor);
   tempTemplate.color = "red";
   tempTemplate.background = "yellow";
   anchorInstance = createElement(tempTemplate);

   function createElement(template) {
      let copy = {};
      Object.assign(copy, button);

      let type = Object.keys(template).toString() == Object.keys(copy) ? "button" : "a";
      let element = document.createElement(type);
      element.innerHTML = template.text;

      switch (type) {
         case "button":
            element.style = `width: ${template.width}px; height: ${template.height}px; background-color: ${template.background}; color: ${template.color}`;
            break;
         case "a":
            element.style = `font-size: ${template.size}px; font-family: ${template.font}; background: ${template.background}; color: ${template.color};`;
            element.href = "#";
            break;
      }

      return app.append(element);
   }
}