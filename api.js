const express = require("express");
const { check } = require("express-validator/check");
const router = express.Router();
const user = require("./controllers/userController");

router.post(
  "/login",
  [
    // allow English letters only for now
    check("phrase").whitelist(
      "ABCDEFGHIJKLMNOPQRSTUVWXYZ abcdefghijklmnopqrstuvwxyz"
    ),
    check("phrase").isLength({ min: 1 }),
    check("pin").whitelist("1234567890"),
    check("pin").isLength({ min: 1 })
  ],
  user.login
);

router.post(
  "/createAccount",
  [
    // allow English letters only for now
    check("phrase").whitelist(
      "ABCDEFGHIJKLMNOPQRSTUVWXYZ abcdefghijklmnopqrstuvwxyz"
    ),
    check("phrase").isLength({ min: 1 }),
    check("pin").whitelist("1234567890"),
    check("pin").isLength({ min: 1 })
  ],
  user.createAccount
);

router.post("/logout", [], user.logout);
router.post("/deleteAccount", [], user.deleteAccount);
router.post("/addResource", [], user.addResource);
router.post("/deleteResource", [], user.deleteResource);
router.get("/getResources", user.getResources);
router.get("/isLoggedIn", user.isLoggedIn);

module.exports = router;
