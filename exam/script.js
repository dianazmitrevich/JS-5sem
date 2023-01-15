const app = document.querySelector(".app");
let count = 1;

class Product {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }

    getId() {
        return this.id;
    }
    setId(id) {
        if (id) {
            this.id = id;
        } else {
            this.id = count;
            count++;
        }
    }

    // object.defineProperty(this, "id", {
    //     get: function () {
    //         return this.id;
    //     },
    //     set: function () {
    //         this.id = Math.rand(1, 100);
    //     },
    // });

    // Object.defineProperty(this, "id", {
    //     writable: false
    // });

    add() {
        let item = document.createElement("div");
        item.classList = "card";
        item.id = this.id;

        let name = document.createElement("div");
        name.classList = "card__name";
        name.textContent = this.name;

        let price = document.createElement("div");
        price.classList = "card__price";
        price.textContent = this.price;

        let button = document.createElement("button");
        button.classList = "card__button";
        button.textContent = "Удалить";
        button.setAttribute("data-id", this.id);

        item.append(name, price, button);

        app.appendChild(item);
    }

    remove() {
        app.removeChild();
    }

    style(color, fontFamily) {
        let item = document.getElementById(this.id);

        item.style.color = color;
        item.style.fontFamily = fontFamily;
    }
}

let p1 = new Product("p1", 100);
let p2 = new Product("p2", 200);
let p3 = new Product("p3", 300);
let p4 = new Product("p4", 400);
let p5 = new Product("p5", 500);

p1.setId(12);
p2.setId();
p3.setId();
p4.setId();
p5.setId();

const elements = [p1, p2, p3, p4, p5];

for (i = 0; i < elements.length; i++) {
    if (!(elements[i].getId() % 2 == 0)) {
        elements[i].add();
        elements[i].style("red", "serif");
    }
}

const buttons = document.querySelectorAll(".card__button");

buttons.forEach(element => {
    element.addEventListener("click", () => {
        let id = element.getAttribute("data-id");
        let item = document.getElementById(id);

        item.remove();
    });
});