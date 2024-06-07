"use strict";

// module
const express = require('express');
const app = express();

// routing
const home = require("./src/routes/home"); // 이 안에 있는 자바스크립트를 읽어오라

// app setting
app.set("views", "./src/views"); // views를 setting
app.set("views engine", "ejs"); // ejs는 html과 비슷한 엔진

// middleware
app.use(express.static(`${__dirname}/src/public`)); // 정적 경로 추가, __dirname은 app.js의 현재경로
app.use("/", home); // use => 미들웨어를 등록해주는 메서드 / 루트 경로로 오면 home 경로로 이동

module.exports = app;