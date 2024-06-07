"use strict";

const id = document.querySelector("#id"), // tag에 부여된 id
    password = document.querySelector("#password"),
    loginBtn = document.querySelector("button"); // tag 그대로 불러옴

loginBtn.addEventListener("click", login);

function login() {
    const req = {
        id: id.value,
        password: password.value,
    };
}