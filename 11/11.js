'use strict'

const app = document.querySelector(".app");

class Product {
    constructor(id, image, name, price) {
        this.id = id;
        this.image = "images/" + image;
        this.name = name;
        this.price = price;
    }

    create() {
        let card = document.createElement("div");
        let image = document.createElement("img");
        let name = document.createElement("div");
        let price = document.createElement("div");

        card.className = "card";
        card.id = this.id;
        image.className = "card__image";
        name.className = "card__name";
        price.className = "card__price";

        image.src = this.image;
        name.innerHTML = this.name;
        price.innerHTML = this.price;

        card.appendChild(image);
        card.appendChild(name);
        card.appendChild(price);

        app.appendChild(card);
    }

    remove() {
        let item = document.getElementById(this.id);
        app.removeChild(item);
    }
}

function edit(id, property, value) {
    let card = document.getElementById(id);

    switch (property) {
        case "name": {
            card.querySelector(".card__name").innerText = value;
            break;
        }
        case "price": {
            card.querySelector(".card__price").innerText = value;
            break;
        }
        case "image": {
            card.querySelector(".card__image").src = value;
            break;
        }
    }
}

class Button {
    constructor(text, color, background) {
        this.text = text;
        this.color = color;
        this.background = background;
    }

    create(id) {
        let card = document.getElementById(id);
        let button = document.createElement("button");

        button.innerText = this.text;
        button.style.color = this.color;
        button.style.background = this.background;
        button.className = "card__button";

        card.appendChild(button);
    }

    remove(id) {
        let card = document.getElementById(id);
        let item = document.querySelector(".card__button");
        card.removeChild(item);
    }
}

let p_1 = new Product(1, "11-1.png", "Macbook Pro 14 gray", "$2499");
p_1.create(); edit(1, "image", "images/11-2.png");

let b_1 = new Button("Buy", "white", "#5299EC");
b_1.create(1); b_1.remove(1);

let p_2 = new Product(2, "11-2.png",  "Macbook Pro 14 silver", "$2499");
p_2.create();

let b_2 = new Button("Buy", "white", "#DE814C");
b_2.create(2);

let p_3 = new Product(3, "11-1.png", "Macbook Pro 14 gray", "$2499");
p_3.create();

let b_3 = new Button("Buy", "white", "#5299EC");
b_3.create(3);

let p_4 = new Product(4, "11-2.png", "Macbook Pro 14 silver", "$2499");
p_4.create();

let p_5 = new Product(5, "11-1.png", "Macbook Pro 14 gray", "$2499");
p_5.create();

let p_6 = new Product(6, "11-2.png", "Macbook Pro 14 silver", "$2499");
p_6.create();

// 3
document.querySelectorAll(".card:nth-child(2n+1)").forEach((item) => {
    item.style.background = "#EBEBEB";
    item.style.boxShadow = "none";
});