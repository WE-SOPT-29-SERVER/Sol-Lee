const express = require("express");
const responseMessage = require("../../constants/responseMessage");
const statusCode = require("../../constants/statusCode");
const users = require("../../dbMockup/user");
const util = require("../../lib/util");
const router = express.Router();

/*
login 
METHOD : POST
URI : localhost:3000/user/login
REQUEST BODY : id,password
RESPONSE STATUS :200(OK)
RESPONSE DATA :비밀번호를 제외한  User정보
*/

//  /user/login
router.post("/login", async (req, res) => {
    //req body에서 데이터 가져오기
    const {
        id,
        password,
    } = req.body;

    //req data 확인 
    if (!id || !password) {
        return res.status(statusCode.BAD_REQUEST).send(util.fail(statusCode.BAD_REQUEST, responseMessage.NULL_VALUE));
    }

    //존재하는 유저인지 확인
    const user = users.filter(user => user.id === id)[0];
    if (!user) {
        return res.status(statusCode.BAD_REQUEST).send(util.fail(statusCode.BAD_REQUEST, responseMessage.NO_USER));
    }

    //비밀번호 확인
    if (user.password !== password) {
        return res.status(statusCode.UNAUTHORIZED).send(util.fail(statusCode.UNAUTHORIZED, responseMessage.MISS_MATCH_PW));
    }
    //성공
    const result = {
        id: user.id,
        email: user.email,
        name: user.name,
    }
    res.status(statusCode.OK).send(util.success(statusCode.OK, responseMessage.LOGIN_SUCCESS, result));
    //후의 작업을 위해서 성공 case는 return 을 붙이지 않는다.
    //TRANSCACTION : 여러개의 작업을 하나의 단위로 묶어놓고, 하나라도 에러가 생기면 rollback
})

module.exports = router;