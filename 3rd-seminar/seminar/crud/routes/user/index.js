const express = require('express');

var router = express.Router();

router.post("/signup", require("./userSignupPOST"));
router.post("/login", require("./userLoginPOST"));
router.get("/profile/:id", require("./profileGET"));

module.exports = router;