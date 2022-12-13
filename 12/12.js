'use strict'

const app = document.querySelector(".app");
const lineElement = document.createElement("div");
lineElement.className = "line";

const targetElement = document.createElement("div");
targetElement.className = "target";

const ballElement = document.createElement("div");
ballElement.className = "ball";
ballElement.id = "ball";

app.appendChild(lineElement);
app.appendChild(targetElement);
app.appendChild(ballElement);


let ball = document.getElementById("ball");

ball.onmousedown = function (e) {

    let coordinateX = 0;
    let coordinateY = 0;

    function animate() {
        document.onmousemove = null;

        function speedFirst() {
            if (coordinateY > 500 && coordinateY < 600) {
                return 100;
            }
            if (coordinateY > 600 && coordinateY < 700) {
                return 200;
            }
            if (coordinateY > 700) {
                return 300;
            }
        }

        let speed = speedFirst();
        let X = 1920 / 2;
        let Y = 500;
        let g = 9.8;
        let alpha = Math.atan((coordinateY - Y) / (X - coordinateX));
        let x = 0;
        let y = 0;
        let t = 0;

        let step = setInterval(() => {
            y = coordinateY - speed * Math.cos(alpha) * t;
            x = coordinateX - (speed * Math.sin(alpha) * t - (g * t ** 2) / 2);
            t += 0.1;

            ball.style.left = x + "px";
            ball.style.top = y + "px";

            if ((x + ball.offsetWidth) > 1920) {
                clearInterval(step);
            }
            if ((y + ball.offsetHeight) < 130) {
                clearInterval(step);
            }

        }, 10);
    }

    ball.ondragstart = function () {
        return false;
    }

    move(e);

    function move(e) {
        ball.style.cursor = "grabbing";
        coordinateX = e.pageX;
        coordinateY = e.pageY - ball.offsetHeight / 2;
        ball.style.left = coordinateX + "px";
        ball.style.top = coordinateY + "px";

        if (e.pageY < 500) {
            ball.style.top = 500 - ball.offsetWidth / 2 + "px";
        }
    }

    ball.onmousemove = function (e) {
        move(e);
    }

    ball.onmouseup = function () {
        animate();
    }
}