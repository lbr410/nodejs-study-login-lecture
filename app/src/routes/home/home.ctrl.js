"use strict";

const UserStorage = require("../../models/UserStorage");

const output = {
    home: (req, res) => {
        res.render("home/index.ejs"); // set에서 views로 설정해놓았으므로 views 폴더 안의 home
    },
    login: function(req, res) {
        res.render("home/login.ejs");
    },
};

const process = {
    login: (req, res) => {
        // console.log(req.body); // 프론트에서 전달한 body 데이터
        // console.log(res);

        const id = req.body.id,
            password = req.body.password;

        // const userStorage = new UserStorage(); // 클래스니까 인스턴스 만들 때 이렇게 만듦
        // console.log(UserStorage.getUsers("id", "password", "name"));
        // id와 password만 반환하게 해주려면 이렇게 받아옴. 이 두 개의 필드만 받아와줌
        const users = UserStorage.getUsers("id", "password");
        
        const response = {};
        if(users.id.includes(id)) { // 프론트엔드에서 전달한 id가 users의 id에 있으면
            const idx = users.id.indexOf(id);
            if(users.password[idx] === password) {
                response.success = true;
                return res.json(response);
            }
        }

        response.success = false;
        response.msg = "로그인이 실패하였습니다.";
        return res.json(response);
    },
};


module.exports = {
    // home, // key : value => 사실은 home : home 된 것임
    // login,
    output,
    process,
};