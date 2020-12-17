const express = require("express");
const router = express.Router();

const user_controller = require("../controller/user_controller");

router.get("/profile", user_controller.profile);
router.get("/friends", user_controller.friends);
router.get("/signin", user_controller.signin);
router.get("/signup", user_controller.signup);

module.exports = router;
