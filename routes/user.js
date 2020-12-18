const express = require("express");

const router = express.Router();
const passport = require("passport");

const user_controller = require("../controller/user_controller");

router.get("/profile", passport.checkAuthentication, user_controller.profile);
router.get("/friends", user_controller.friends);
router.get("/signin", user_controller.signin);
router.get("/signup", user_controller.signup);
router.post("/create", user_controller.create);
// use passport as middle ware to authenticate
router.post(
  "/createSession",
  passport.authenticate("local", { failureRedirect: "/user/signin" }),
  user_controller.createSession
);

router.get("/signout", user_controller.destroySession);

module.exports = router;
