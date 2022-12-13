'use strict'

const app = document.querySelector(".app");

// 1
const cardSection = document.createElement("div");
cardSection.className = "cards";
app.appendChild(cardSection);

for (let i = 0; i < 3; i++) {
    let item = document.createElement("div");
    item.className = "card__item";

    let wrap = document.createElement("div");
    wrap.className = "card-inner";

    item.appendChild(wrap);

    cardSection.appendChild(item);
}

const cards = document.querySelectorAll(".card__item");

cards.forEach((card) => {
    card.addEventListener("mousemove", startRotate);
    card.addEventListener("mouseout", stopRotate);
});

function startRotate(e) {
    let cardInner = this.querySelector(".card-inner");
    let halfHeight = cardInner.offsetHeight / 2;
    let halfWidth = cardInner.offsetWidth / 2;
    cardInner.style.transform = 'rotateX(' + (e.offsetY - halfHeight) / 20 + 'deg) rotateY(' + -(e.offsetX - halfWidth) / 15 + 'deg)';
}

function stopRotate(e) {
    let cardInner = this.querySelector(".card-inner");
    cardInner.style.transform = "rotate(0)";
}

// 2
const loaderSection = document.createElement("div");
loaderSection.className = "loader";
app.appendChild(loaderSection);

loaderSection.innerHTML += `<svg class="absolute" width="120" height="120">
<circle stroke="#F1F1F1" fill="transparent" stroke-width="2" cx="60" cy="60" r="52"/>
</svg>`;
loaderSection.innerHTML += `<svg class="progress" width="120" height="120">
<circle class="progress__circle" stroke="rgb(181, 205, 209)" fill="transparent" stroke-width="4" cx="60" cy="60" r="52"/>
</svg>`;

const percentInput = document.createElement("input");
percentInput.type = "number";
percentInput.className = "percent";
percentInput.value = 0;
loaderSection.appendChild(percentInput);

const circle = document.querySelector(".progress__circle");
const radius = circle.r.baseVal.value;
const circumference = 2 * Math.PI * radius;
const input = document.querySelector(".percent");

input.addEventListener("change", function () {
    setProgress(input.value);
});

circle.style.strokeDasharray = `${circumference} ${circumference}`;
circle.style.strokeDashoffset = circumference;

function setProgress(percent) {
    let offset = circumference - (percent / 100 * circumference) % circumference;
    circle.style.strokeDashoffset = offset;
}

// 3
const parallaxSection = document.createElement("div");
parallaxSection.className = "parallax";
app.appendChild(parallaxSection);

for (let i = 1; i <= 3; i++) {
    let layer = document.createElement("div");
    layer.className = "layer";
    layer.setAttribute("data-speed", i * 10);

    parallaxSection.appendChild(layer);
}

function parallax(e) {
    this.querySelectorAll(".layer").forEach(layer => {
        let speed = layer.getAttribute("data-speed");
        layer.style.transform = `translateX(${e.clientX * speed / 1000}px)`
    });
}

document.addEventListener('mousemove', parallax);