const express = require("express");
const { check } = require("express-validator/check");
const router = express.Router();
const user = require("./controllers/userController");

router.post(
  "/login",
  [
    check("phrase").whitelist(
      {"ABCDEFGHIJKLMNOPQRSTUVWXYZ abcdefghijklmnopqrstuvwxyz"}
    ),
    check("phrase").isLength({ min: 1 }),
    check("pin").whitelist({"1234567890"}),
    check("pin").isLength({ min: 1 }),
  ],
  user.login
);

router.post(
  "/createAccount",
  [
    check("phrase").whitelist(
      {"ABCDEFGHIJKLMNOPQRSTUVWXYZ abcdefghijklmnopqrstuvwxyz"}
    ),
    check("phrase").isLength({ min: 1 }),
    check("pin").whitelist({"1234567890"})
    check("pin").isLength({ min: 1 }),
  ],
  user.createAccount
);

module.exports = router;
