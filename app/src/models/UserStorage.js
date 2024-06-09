"use strict";

const fs = require("fs").promises;

class UserStorage {
    static #getUserInfo(data, id) { // 은닉화
        const users = JSON.parse(data); // users.json 파일의 내용 읽어옴
        const idx = users.id.indexOf(id);
        const usersKeys = Object.keys(users); // users의 키값들만 리스트로 만듦 => [id, password, name]
        const userInfo = usersKeys.reduce((newUser, info) => {
            newUser[info] = users[info][idx];
            return newUser;
        }, {})
        return userInfo;
    }

    static #getUsers(data, isAll, fields) {
        const users = JSON.parse(data);
        if(isAll) return users;
        const newUsers = fields.reduce((newUsers, field) => { // 반복문. fields에 대한 원소가 하나씩 순회가 됨
            if(users.hasOwnProperty(field)) { // users에 해당하는 키 값이 있는가? t/f
                newUsers[field] = users[field];
            }
            return newUsers;
        }, {})
        return newUsers;
    }

    static getUsers(isAll, ...fields) {
        return fs.readFile("./src/databases/users.json")
            .then((data) => { // 이건 버퍼 데이터임
                return this.#getUsers(data, isAll, fields);
            })
            .catch(console.error);
    };

    static getUserInfo(id) {
        return fs.readFile("./src/databases/users.json") // app.js의 경로에서 시작 / promise를 반환
            .then((data) => {
                return this.#getUserInfo(data, id);
                // #getUserInfo가 클래스 메서드이기 때문에 this를 씀
                // 클래스 메서드를 호출할 때는 그 메서드가 속한 클래스의 인스턴스나 클래스 자체를 참조하기 위해 this를 씀
                // #getUserInfo가 정적 메서드이기 때문에 this는 UserStorage 클래스를 가리킴
            })
            .catch(console.error);
            // .catch((err) => console.error(err));
    };

    static async save(userInfo) {
        // const users = await this.getUsers("id", "password", "name");
        const users = await this.getUsers(true); // 모든 필드 다 가져올거라서 true로 바꿈
        // console.log(users); // 이때까지는 자바스크립트 객체
        if(users.id.includes(userInfo.id)) {
            // return new Error("이미 존재하는 아이디입니다.");
            // throw Error("이미 존재하는 아이디입니다.");
            // save() 메서드의 실행을 즉시 중단하고 에러를 발생시킴
            // save() 함수가 User.js의 try~catch 문 안에서 호출되서 throw를 사용한 것?
            throw "이미 존재하는 아이디입니다";
        }

        // 클라이언트가 회원가입하려고 한 아이디가 존재하지 않을 때 회원가입이 되야함
        users.id.push(userInfo.id);
        users.name.push(userInfo.name);
        users.password.push(userInfo.password);
        fs.writeFile("./src/databases/users.json", JSON.stringify(users)); // 저장할 파일의 경로, 저장할 데이터
        return { success: true };
    };
}

module.exports = UserStorage;