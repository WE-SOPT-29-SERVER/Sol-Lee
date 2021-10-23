const express = require("express");
const responseMessage = require("../../../../constants/responseMessage");
const statusCode = require("../../../../constants/statusCode");
const users = require("../dbMockup/user");
const util = require("../lib/util");
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
        return res
            .status(statusCode.BAD_REQUEST).send(util.fail(statusCode.BAD_REQUEST, responseMessage.NULL_VALUE));
    }

    //해당 email을 가진 유저가 이미 있을 경우 Already Email 반환
    const alreadyUser = users.filter(user => user.email === email).length > 0;
    if (alreadyUser) {
        return res.status(statusCode.BAD_REQUEST).send(util.fail(statusCode.BAD_REQUEST, responseMessage.ALREADY_EMAIL));
    }

    const newUser = {
        id: users.length + 1,
        name,
        password,
        email
    };

    users.push(newUser);

    res.status(200).send(util.success(statusCode.OK, responseMessage.CREATED_USER, newUser));
});

//  /user/login




module.exports = router;