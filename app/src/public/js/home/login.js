"use strict";

// login.ejs라는 html과 연결되어있는 자바스크립트 파일

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
    })
        .then((res) => res.json()) // 응답을 받으려면 then()을 씀
        .then((res) => {}); // 바로 앞 then에서 res.json() '작업이 끝나면!!' res.json()의 결과를 반환받음
}