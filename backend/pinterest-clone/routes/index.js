var express = require("express");
var router = express.Router();
const userModel = require("./users");
const postModel = require("./posts");

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Express" });
});

router.get("/createuser", async (req, res, next) => {
  const user = await userModel.create({
    username: "Lucky",
    password: "divyanshu",
    posts: [],
    email: "lucky123@gmail.com",
    fullName: "Divyanshu Kashyap",
  });

  res.send(user);
});

router.get("/allposts", async (req, res, next) => {
  const user = await userModel
    .findOne({ _id: "6576f5da9536c8221d360d2c" })
    .populate("posts");

  res.send(user);
});

router.get("/createpost", async (req, res, next) => {
  const post = await postModel.create({
    postText: "Learning MERN Stack from sheryians coding school",
    user: "6576f5da9536c8221d360d2c",
  });

  let user = await userModel.findOne({ _id: "6576f5da9536c8221d360d2c" });

  user.posts.push(post._id);

  await user.save();
  res.send("done");

  // res.send(post);
});

module.exports = router;
