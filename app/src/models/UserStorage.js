"use strict";

class UserStorage {
    static #users = { // 클래스 안에 변수 선언할 때 const같은 선언자 필요 X
        // -> 인스턴스 생성 없이 클래스에서 변수로 바로 접근을 하려고 할 때는 변수 앞에 static을 붙혀줌
        // -> #는 은닉화. public한 변수에서 private 변수로 바꿔주는 것
        id: ["mng", "zoe", "sh"],
        password: ["1234", "1234", "123456"],
        name: ["뭉이", "조이", "성환"],
    };

    static getUsers(...fields) { // id, password?
        const users = this.#users;
        const newUsers = fields.reduce((newUsers, field) => { // 반복문. fields에 대한 원소가 하나씩 순회가 됨
            // console.log(newUsers, field);
            if(users.hasOwnProperty(field)) { // users에 해당하는 키 값이 있는가? t/f
                newUsers[field] = users[field];
            }
            return newUsers;
        }, {})
        return newUsers;
    };
}

module.exports = UserStorage;