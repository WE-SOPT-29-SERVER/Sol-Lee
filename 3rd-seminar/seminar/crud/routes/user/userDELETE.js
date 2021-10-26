const express = require("express");
const responseMessage = require("../../constants/responseMessage");
const statusCode = require("../../constants/statusCode");
const users = require("../../dbMockup/user");
const util = require("../../lib/util");
const router = express.Router();

/*
delete user
METHOD : DELETE
URI : localhost:3000/user/:id
RESPONSE STATUS :200(OK)
RESPONSE DATA: 전체 유저 정보
*/

//  /user/:id
router.delete("/:id", async (req, res) => {
    const {
        id
    } = req.params;
    const {
        newName
    } = req.body;

    if (!id) {
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

    const newUsers = users.filter(user => user.id !== Number(id));

    res.status(statusCode.OK).send(
        util.success(statusCode.OK, responseMessage.USER_DELETE_SUCCESS, newUsers, ),
    )
})

module.exports = router;