"use strict";

// module
const express = require("express");
const bodyParser = require("body-parser");
const app = express();

// routing
const home = require("./src/routes/home"); // 이 안에 있는 자바스크립트를 읽어오라

// app setting & middleware
app.set("views", "./src/views"); // views를 setting
app.set("views engine", "ejs"); // ejs는 html과 비슷한 엔진
app.use(express.static(`${__dirname}/src/public`)); // 정적 경로 추가, __dirname은 app.js의 현재경로
app.use(bodyParser.json()); // body-parser가 json 데이터를 파싱해올 수 있도록 함
app.use(bodyParser.urlencoded({ extended: true })); // URL을 통해 전달되는 데이터에 한글, 공백 등과 같은 문자가 포함될 경우 제대로 인식되지 않는 문제 해결

app.use("/", home); // use => 미들웨어를 등록해주는 메서드 / 루트 경로로 오면 home 경로로 이동

module.exports = app;