const express = require("express");
const router = express.Router();
const user = require("./controllers/userController")

router.post("/login", user.login);

module.exports = router;
