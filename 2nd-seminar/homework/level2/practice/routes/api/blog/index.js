const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
    const result = {
        status: 200,
        message: "blog에 접근합니다",
    };
    res.status(200).send(result);
});

router.post("/post", (req, res) => {
    const title = req.body.title;
    const content = req.body.content;

    const result = {
        status: 200,
        message: `${title} 포스팅 성공!`,
    };
    res.status(200).send(result);
});

router.get("/post", (req, res) => {
    const result = {
        status: 200,
        message: "post에 접근합니다",
    };
    res.status(200).send(result);
});

module.exports = router;