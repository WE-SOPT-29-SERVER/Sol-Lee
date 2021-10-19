const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  const result = {
    status: 200,
    message: 'userPage에 접근합니다',
  };
  res.status(200).send(result);
});

router.post('/login', (req, res) => {
  const id = req.body.id;
  const password = req.body.password;
  if (id) {
    const result = {
      status: 200,
      message: `${id}님이 로그인을 하셨습니다.`,
    };
    res.status(200).send(result);
  } else {
    const err = {
      status: 400,
      message: '로그인에 실패하셨습니다.',
    };
    res.status(400).send(err);
  }
});

router.post('/signup', (req, res) => {
  const id = req.body.id;
  const password = req.body.password;
  if (id) {
    const result = {
      status: 200,
      message: `${id}님 환영합니다.`,
    };
    res.status(200).send(result);
  } else {
    const err = {
      status: 400,
      message: '회원가입에 실패하셨습니다.',
    };
    res.status(400).send(err);
  }
});

module.exports = router;
