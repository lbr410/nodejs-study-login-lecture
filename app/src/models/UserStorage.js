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

    static getUsers(...fields) { // id, password?
        const newUsers = fields.reduce((newUsers, field) => { // 반복문. fields에 대한 원소가 하나씩 순회가 됨
            if(users.hasOwnProperty(field)) { // users에 해당하는 키 값이 있는가? t/f
                newUsers[field] = users[field];
            }
            return newUsers;
        }, {})
        return newUsers;
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

    static save(userInfo) {
        users.id.push(userInfo.id);
        users.name.push(userInfo.name);
        users.password.push(userInfo.password);
        return { success: true };
    };
}

module.exports = UserStorage;