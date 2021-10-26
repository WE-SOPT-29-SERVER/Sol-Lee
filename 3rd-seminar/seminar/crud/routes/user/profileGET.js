const express = require("express");
const responseMessage = require("../../constants/responseMessage");
const statusCode = require("../../constants/statusCode");
const users = require("../../dbMockup/user");
const util = require("../../lib/util");
const router = express.Router();

/*
get profile
METHOD : GET
URI : localhost:3000/user/profile/:id
RESPONSE STATUS :200(OK)
RESPONSE DATA :비밀번호를 제외한  User정보
*/

//  /user/login
router.get("/profile/:id", async (req, res) => {
    //req params에서 데이터 가져오기
    const id = Number(req.params.id);
    //존재하는 아이디인지 확인 - 없다면 No user 반환
    const user = users.filter(user => user.id === id)[0];

    if (!user) {
        return res.status(statusCode.BAD_REQUEST).send(util.fail(statusCode.BAD_REQUEST, responseMessage.NO_USER));
    }

    //성공 - login success와 함께 userId 반환
    res.status(statusCode.OK).send(util.success(statusCode.OK, responseMessage.LOGIN_SUCCESS, {
        "userId": id
    }));

})

module.exports = router;