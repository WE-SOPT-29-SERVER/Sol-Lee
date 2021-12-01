const express = require("express");
const responseMessage = require("../../../constants/responseMessage");
const statusCode = require("../../../constants/statusCode");
const posts = require("../../../dbMockup/post");
const util = require("../../../lib/util");
const router = express.Router();

/*
delete post
METHOD : DELETE
URI : localhost:3000/api/post/:id
RESPONSE STATUS :200(OK)
RESPONSE DATA: 글 삭제
*/

//  /post/:id
router.delete("/:id", async (req, res) => {
    const {
        id
    } = req.params;
    if (!id) {
        return res.status(statusCode.BAD_REQUEST).send(util.fail(statusCode.BAD_REQUEST), responseMessage.NULL_VALUE);
    }

    const existingPost = posts.filter(post => post.id === Number(id))[0];

    if (!existingPost) {
        return res
            .status(statusCode.BAD_REQUEST)
            .send(util.fail(statusCode.BAD_REQUEST, responseMessage.NO_USER));
    }

    const newPosts = posts.filter(post => post.id !== Number(id));

    res.status(statusCode.OK).send(
        util.success(statusCode.OK, responseMessage.USER_DELETE_SUCCESS, newPosts, ),
    )
})

module.exports = router;