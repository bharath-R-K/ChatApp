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
  // To do later
};

module.exports.createSession = function (req, res) {
  // To do later
};
