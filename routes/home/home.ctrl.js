"use strict";

const home = (req, res) => {
    res.render("home/index.ejs"); // set에서 views로 설정해놓았으므로 views 폴더 안의 home
};

function login(req, res) {
    res.render("home/login.ejs");
};

module.exports = {
    home, // key : value => 사실은 home : home 된 것임
    login,
};