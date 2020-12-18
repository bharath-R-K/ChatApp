// mongodb schema
const User = require("../modules/user");

module.exports.profile = function (req, res) {
  return res.render("profile", {
    title: "Profile",
  });
};

module.exports.friends = function (req, res) {
  return res.render("friends", {
    title: "My friends list",
  });
};
module.exports.signin = function (req, res) {
  if (req.isAuthenticated()) {
    return res.redirect("/user/profile");
  }
  return res.render("signin", {
    title: "ChatApp || Signin",
  });
};
module.exports.signup = function (req, res) {
  if (req.isAuthenticated()) {
    return res.redirect("/user/profile");
  }
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
      console.log("error in finding user email while signing up");
      return;
    }

    if (!user) {
      User.create(req.body, function (err, user) {
        if (err) {
          console.log("error while signin");
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
  return res.redirect("/user/profile");
};

module.exports.destroySession = function (req, res) {
  req.logout();
  return res.redirect("/home");
};
