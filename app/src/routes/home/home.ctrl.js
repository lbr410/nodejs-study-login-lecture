"use strict";

const User = require("../../models/User");
// const UserStorage = require("../../models/UserStorage");

const output = {
    home: (req, res) => {
        res.render("home/index.ejs"); // set에서 views로 설정해놓았으므로 views 폴더 안의 home
    },
    login: function(req, res) {
        res.render("home/login.ejs");
    },
    register: (req, res) => {
        res.render("home/register.ejs");
    },
};

const process = {
    login: async (req, res) => {
        const user = new User(req.body);
        const response = await user.login();
        return res.json(response); // json 객체로 만들어 클라이언트에게 던져줌
    },
    register: async (req, res) => {
        const user = new User(req.body);
        const response = await user.register();
        return res.json(response);
    },
};


module.exports = {
    // home, // key : value => 사실은 home : home 된 것임
    // login,
    output,
    process,
};