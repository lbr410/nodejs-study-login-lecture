"use strict";

const id = document.querySelector("#id"), // tag에 부여된 id
    password = document.querySelector("#password"),
    loginBtn = document.querySelector("button"); // tag 그대로 불러옴

loginBtn.addEventListener("click", login);

function login() {
    const req = { // object(객체) 형태
        id: id.value,
        password: password.value,
    };

    // console.log(req, JSON.stringify(req));
    // console.log(JSON.stringify(req));

    fetch("/login", { // object(객체) 형태
        method: "POST",
        headers: {
            "Content-Type":"application/json" // 내가 보내는 데이터의 타입을 명시
        },
        body: JSON.stringify(req), // json 데이터 타입으로 데이터 전달
    });
}