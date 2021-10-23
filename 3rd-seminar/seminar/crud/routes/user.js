const express = require("express");
const users = require("../dbMockup/user");
const router = express.Router();

/*
sign up
METHOD : POST
URI: localhost:3000/user/signup
REQUEST BODY :id,name,password,email
RESPONSE STATUS:200(OK)
RESPONSE DATA :All User Data
*/

// /user/signup
router.post('/signup', (req, res) => {
    //desturcturing assignment (비구조화 할당)
    //email : myEmail 형식으로 커스텀 가능
    const {
        name,
        password,
        email
    } = req.body;
    //request data 확인 - 세 개중 하나라도 없다면 Bad Request 반환
    if (!name || !password || !email) {
        return res.status(400).send({
            status: 400,
            message: "BAD REQUEST"
        });
    }

    //해당 email을 가진 유저가 이미 있을 경우 Already Email 반환
    const alreadyUser = users.filter(user => user.email === email).length > 0;
    if (alreadyUser) {
        return res.status(409).send({
            status: 409,
            message: "ALREADY EMAIL"
        });
    }

    const newUser = {
        id: users.length + 1,
        name,
        password,
        email
    };

    users.push(newUser);

    res.status(200).send({
        status: 200,
        message: "success",
        data: newUser
    });
});

//  /user/login




module.exports = router;