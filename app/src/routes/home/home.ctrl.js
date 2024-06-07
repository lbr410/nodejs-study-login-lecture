"use strict"; 

const output = {
    home: (req, res) => {
        res.render("home/index.ejs"); // set에서 views로 설정해놓았으므로 views 폴더 안의 home
    },
    login: function(req, res) {
        res.render("home/login.ejs");
    },
};

const users = {
    id: ["뭉이", "조이", "성환"],
    password: ["1234", "1234", "123456"],
}; 

const process = {
    login: (req, res) => {
        // console.log(req.body); // 프론트에서 전달한 body 데이터
        // console.log(res);
        const id = req.body.id,
            password = req.body.password;
        
        if(users.id.includes(id)) { // 프론트엔드에서 전달한 id가 users의 id에 있으면
            const idx = users.id.indexOf(id);
            if(users.password[idx] === password) {
                return res.json({
                    success: true,
                });
            }
        }

        return res.json({
            success: false,
            msg: "로그인에 실패하였습니다.",
        });
    }
};


module.exports = {
    // home, // key : value => 사실은 home : home 된 것임
    // login,
    output,
    process,
};