const express = require("express");
const { check } = require("express-validator/check");
const router = express.Router();
const user = require("./controllers/userController");

router.post(
  "/login",
  [
    check("phrase").whitelist(
      "ABCDEFGHIJKLMNOPQRSTUVWXYZ abcdefghijklmnopqrstuvwxyz"
    ),
    check("pin").whitelist("1234567890")
  ],
  user.login
);

router.post(
  "/createAccount",
  [
    check("phrase").whitelist(
      "ABCDEFGHIJKLMNOPQRSTUVWXYZ abcdefghijklmnopqrstuvwxyz"
    ),
    check("pin").whitelist("1234567890")
  ],
  user.createAccount
);

module.exports = router;
