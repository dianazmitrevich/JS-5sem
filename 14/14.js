'use strict'

let form = document.getElementById("form-2");
let fields = document.querySelectorAll(".field");
let nameReg = new RegExp("^([А-Я]{1}[а-яё]{1,23}|[A-Z]{1}[a-z]{1,23})$");
let dateReg = new RegExp("^([0-9]{2})\\.([0-9]{2})\\.([1-2][0-9]{3})$");
let emailReg = new RegExp("[^@\s]+@[^@\s]+\.[^@\s]+");
let passwReg = new RegExp("^(.{7,})$");

form.addEventListener("submit", function (e) {
    e.preventDefault();
    let errors = form.querySelectorAll(".error");

    for (let i = 0; i < errors.length; i++) {
        errors[i].remove();
    }

    if (!nameReg.test(fields[0].value)) {
        let error = document.createElement("div");
        error.className = "error";
        error.style.color = "red";
        error.innerHTML = "Некорректная фамилия";
        form[0].parentElement.insertBefore(error, fields[0]);
    }

    if (!nameReg.test(fields[1].value)) {
        let error = document.createElement("div");
        error.className = "error";
        error.style.color = "red";
        error.innerHTML = "Некорректное имя";
        form[1].parentElement.insertBefore(error, fields[1]);
    }

    if (!dateReg.test(fields[2].value)) {
        let error = document.createElement("div");
        error.className = "error";
        error.style.color = "red";
        error.innerHTML = "Некорректная дата";
        form[2].parentElement.insertBefore(error, fields[2]);
    }

    if (!emailReg.test(fields[3].value)) {
        let error = document.createElement("div");
        error.className = "error";
        error.style.color = "red";
        error.innerHTML = "Некорректный e-mail";
        form[3].parentElement.insertBefore(error, fields[3]);
    }

    if (!passwReg.test(fields[4].value)) {
        let error = document.createElement("div");
        error.className = "error";
        error.style.color = "red";
        error.innerHTML = "Слишком короткий пароль";
        form[4].parentElement.insertBefore(error, fields[4]);
    }
})