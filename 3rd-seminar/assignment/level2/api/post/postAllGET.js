const express = require("express");
const responseMessage = require("../../constants/responseMessage");
const statusCode = require("../../constants/statusCode");
const posts = require("../../dbMockup/post");
const util = require("../../lib/util");
const router = express.Router();

/*
get all posts
METHOD : GET
URI : localhost:3000/post/
RESPONSE STATUS :200(OK)
RESPONSE DATA : 모든 게시글
*/

//  /post
router.get("/", async (req, res) => {

    try {
        const resultList = posts.map(post => {
            return result = {
                id: post.id,
                title: post.title,
                contents: post.contents
            }
        })

        console.log(resultList)

        //성공 
        res.status(statusCode.OK).send(util.success(statusCode.OK, responseMessage.POST_GET_ALL_SUCCESS, {
            result
        }));
    } catch (error) {
        console.log(error)
    }

})

module.exports = router;