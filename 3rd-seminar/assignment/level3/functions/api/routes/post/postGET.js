const express = require("express");
const responseMessage = require("../../../constants/responseMessage");
const statusCode = require("../../../constants/statusCode");
const posts = require("../../../dbMockup/post");
const util = require("../../../lib/util");
const router = express.Router();


/*
get a post
METHOD : GET
URI : localhost:3000/api/post/:id
RESPONSE STATUS :200(OK)
RESPONSE DATA : 특정 게시글
*/

//  /post
router.get("/:id", async (req, res) => {

    try {
        const
            postId = req.params.id;
        const result = posts.filter(post => {
            return post.id == postId
        })

        //성공 
        res.status(statusCode.OK).send(util.success(statusCode.OK, responseMessage.POST_GET_SUCCESS, result[0]));
    } catch (error) {
        console.log(error)
    }
})

module.exports = router;