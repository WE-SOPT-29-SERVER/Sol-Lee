const express = require("express");
const responseMessage = require("../../../constants/responseMessage");
const statusCode = require("../../../constants/statusCode");
const posts = require("../../../dbMockup/post");
const util = require("../../../lib/util");
const router = express.Router();


/*
post a post
METHOD : POST
URI : localhost:3000/api/post
RESPONSE STATUS :200(OK)
RESPONSE DATA : 특정 게시글
*/

//  /post
router.post("/", async (req, res) => {

    try {
        const {
            title,
            contents
        } = req.body;
        const post = {
            title: title,
            contents: contents
        }
        //성공 
        res.status(statusCode.OK).send(util.success(statusCode.OK, responseMessage.POST_CREATE_SUCCESS, post));
    } catch (error) {
        console.log(error)
    }
})

module.exports = router;