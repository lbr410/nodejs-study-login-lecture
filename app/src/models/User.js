"use strict";

const UserStorage = require("./UserStorage");

class User {
    constructor(body) {
        this.body = body;
    }

    async login() {
        const client = this.body;
        const { id, password } = await UserStorage.getUserInfo(client.id); // await은 데이터를 다 읽어올 때까지 기다리라고 알려줌. promise를 반환하는 애한테만 할 수 있음
        
        if(id) {
            if(id === client.id && password === client.password) {
                return { success: true };
            }
            return { success: false, msg: "비밀번호가 틀렸습니다." };
        }
        return { success: false, msg: "존재하지 않는 아이디입니다." };
    }

    async register() {
        const client = this.body;
        try {
            const response = await UserStorage.save(client); // 저장하는데 시간이 걸릴테니 await
            return response;
        } catch(err) { // save 함수 실행시 에러가 발생하면 여기에 잡힘?
            // console.error(err);
            return { success: false, msg: err };
        }
    }
}

module.exports = User;