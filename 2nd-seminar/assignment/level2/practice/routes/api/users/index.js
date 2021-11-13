const express = require("express");
const router = express.Router();
const members = require('./dummyData'); //dummyData 사용
router.get("/", (req, res) => {
    const result = {
        status: 200,
        message: "userPage에 접근합니다",
    };
    res.status(200).send(result);
});

router.post("/login", (req, res) => {
    const id = req.body.id;
    const password = req.body.password;
    let result;
    //id check logic

    //pw check logic(추후 수정-db)
    if (password.length() < 8) {
        result = {
            status: 404,
            message: "비밀번호는 8자리 이상으로 입력해주세요"
        }
    } else {
        result = {
            status: 200,
            message: `로그인 성공! ${id}님 환영합니다.`
        }
    }

})

router.post("/signup", (req, res) => {
    //id check logic(추후 수정)
    //pw check logic
    if (password.length() < 8) {
        result = {
            status: 400,
            message: "비밀번호는 8자리 이상으로 입력해주세요"
        }
    } else {
        result = {
            status: 200,
            message: `회원가입 성공! ${id}님 환영합니다.`
        }

    }
    res.status(200).send(result);
    res.status(400).send(result);
})

module.exports = router;