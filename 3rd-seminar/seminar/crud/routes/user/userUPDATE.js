const express = require("express");
const responseMessage = require("../../constants/responseMessage");
const statusCode = require("../../constants/statusCode");
const users = require("../../dbMockup/user");
const util = require("../../lib/util");
const router = express.Router();

/*
update profile
METHOD : PUT
URI : localhost:3000/user/:id
REQUEST DATA :비밀번호를 제외한  User정보
RESPONSE STATUS :200(OK)
RESPONSE DATA: 
*/

//  /user/:id
router.put("/:id", async (req, res) => {
    const {
        id
    } = req.params;
    const {
        newName
    } = req.body;

    if (!id || !newName) {
        return res.status(statusCode.BAD_REQUEST)
            .send(
                util.fail(statusCode.BAD_REQUEST, responseMessage.NULL_VALUE),
            );
    }

    const existingUser = users.filter(user => user.id === Number(id))[0];

    if (!existingUser) {
        return res
            .status(statusCode.BAD_REQUEST)
            .send(util.fail(statusCode.BAD_REQUEST, responseMessage.NO_USER));
    }

    const updateUser = {
        ...existingUser,
        name: newName
    }; //비구조화 할당/구조분해 할당 : 명시적으로 할당되지 않은 나머지들 설정 가능(기존 내용을 같게 쓰고, 이름만 붙인다)

    res.status(statusCode.OK).send(
        util.success(statusCode.OK, responseMessage.USER_UPDATE_SUCCESS, updateUser, ),
    )
})

module.exports = router;