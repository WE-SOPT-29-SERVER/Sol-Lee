const express = require("express");
const responseMessage = require("../../../constants/responseMessage");
const statusCode = require("../../../constants/statusCode");
const posts = require("../../../dbMockup/post");
const util = require("../../../lib/util");
const router = express.Router();

/*
update post
METHOD : PUT
URI : localhost:3000/post/:id
REQUEST DATA :newPost
RESPONSE STATUS :200(OK)
RESPONSE DATA: 수정된 글 정보
*/

//  /post/:id
router.put("/:id", async (req, res) => {
    const {
        id
    } = req.params;
    const {
        newTitle,
        newContents
    } = req.body;

    if (!id) {
        return res.status(statusCode.BAD_REQUEST)
            .send(
                util.fail(statusCode.BAD_REQUEST, responseMessage.NULL_VALUE),
            );
    }

    const existingPost = posts.filter(post => post.id === Number(id))[0];
    if (!existingPost) {
        return res
            .status(statusCode.BAD_REQUEST)
            .send(util.fail(statusCode.BAD_REQUEST, responseMessage.NO_POST));
    }

    const updatePost = {
        ...existingPost,
        title: newTitle,
        contents: newContents
    };
    res.status(statusCode.OK).send(
        util.success(statusCode.OK, responseMessage.POST_UPDATE_SUCCESS, updatePost, ),
    )
})

module.exports = router;