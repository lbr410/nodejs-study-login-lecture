"use strict";

// module
const express = require('express');
const app = express();

// routing
const home = require("./routes/home"); // 이 안에 있는 자바스크립트를 읽어오라

// app setting
app.set("views", "./views"); // views를 setting
app.set("views engine", "ejs"); // ejs는 html과 비슷한 엔진

// middleware
app.use("/", home); // use => 미들웨어를 등록해주는 메서드 / 루트 경로로 오면 home 경로로 이동

module.exports = app;