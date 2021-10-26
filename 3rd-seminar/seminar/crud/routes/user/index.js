const express = require('express');

var router = express.Router();

router.post("/signup", require("./userSignupPOST"));
router.post("/login", require("./userLoginPOST"));
router.put("/:id", require("./userUPDATE"));
router.delete("/:id", require("./userDELETE"));
router.get("/profile/:id", require("./profileGET"));

module.exports = router;