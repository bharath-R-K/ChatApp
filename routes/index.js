const express = require("express");
//const { home } = require("../controller/home_controller");
const router = express.Router();

console.log("route");
const home_controller = require("../controller/home_controller");
// access home
router.get("/home", home_controller.home);

// when ever request is for users
router.use("/user", require("./user"));

router.use("/posts", require("./posts"));

module.exports = router;
