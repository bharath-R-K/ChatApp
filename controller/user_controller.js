// mongodb schema
const User = require("../modules/user");

module.exports.profile = function (req, res) {
  return res.end("<h1>User Profile</h1>");
};

module.exports.friends = function (req, res) {
  return res.render("friends", {
    title: "My friends list",
  });
};
module.exports.signin = function (req, res) {
  return res.render("signin", {
    title: "ChatApp || Signin",
  });
};
module.exports.signup = function (req, res) {
  return res.render("signup", {
    title: "ChatApp , Chat with the World",
  });
};

//Get signup data
module.exports.create = function (req, res) {
  if (req.body.password != req.body.confirm_password) {
    return res.redirect("back");
  }

  User.findOne({ email: req.body.email }, function (err, user) {
    if (err) {
      console.log("error in finding user in signing up");
      return;
    }

    if (!user) {
      User.create(req.body, function (err, user) {
        if (err) {
          console.log("error in creating user while signing up");
          return;
        }

        return res.redirect("/user/signin");
      });
    } else {
      return res.redirect("back");
    }
  });
};

module.exports.createSession = function (req, res) {
  // To do later
};
