const Post = require("../modules/post");

module.exports.create = function (req, res) {
  Post.create(
    {
      // content is from profile and home.ejs
      content: req.body.content,
      // need to save the userer who logged in
      user: req.user._id,
    },
    // callback function
    function (err, post) {
      if (err) {
        console.log("error creating post");
        return;
      }

      return res.redirect("back");
    }
  );
};

// post.create
