var express = require("express");
var router = express.Router();
const userModel = require("./users");
const postModel = require("./posts");
const passport = require("passport");

const localStrategy = require("passport-local");

passport.use(new localStrategy(userModel.authenticate()));

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index");
});

router.get("/login", function (req, res, next) {
  console.log(req.flash("error"));
  res.render("login", { error: req.flash("error") });
});

router.get("/logout", (req, res, next) => {
  req.logout((err) => {
    if (err) next(err);

    res.redirect("/login");
  });
});

router.get("/feed", (req, res) => {
  res.render("feed");
});

router.get("/profile", isLoggedIn, async (req, res) => {
  // res.send("profile");

  const user = await userModel.findOne({
    username: req.session.passport.user,
  });

  res.render("profile", { user });
});

router.post(
  "/login",
  passport.authenticate("local", {
    successRedirect: "/profile",
    failureRedirect: "/login",
    failureFlash: true,
  }),
  function (req, res) {}
);

router.post("/register", (req, res) => {
  const { username, email, fullName } = req.body;

  const userData = new userModel({
    username,
    email,
    fullName,
  });

  userModel.register(userData, req.body.password).then(() => {
    passport.authenticate("local")(req, res, () => {
      res.redirect("/profile");
    });
  });
});

function isLoggedIn(req, res, next) {
  if (req.isAuthenticated()) next();

  res.redirect("/");
}

// router.get("/createuser", async (req, res, next) => {
//   const user = await userModel.create({
//     username: "Lucky",
//     password: "divyanshu",
//     posts: [],
//     email: "lucky123@gmail.com",
//     fullName: "Divyanshu Kashyap",
//   });

//   res.send(user);
// });

// router.get("/allposts", async (req, res, next) => {
//   const user = await userModel
//     .findOne({ _id: "6576f5da9536c8221d360d2c" })
//     .populate("posts");

//   res.send(user);
// });

// router.get("/createpost", async (req, res, next) => {
//   const post = await postModel.create({
//     postText: "Learning MERN Stack from sheryians coding school",
//     user: "6576f5da9536c8221d360d2c",
//   });

//   let user = await userModel.findOne({ _id: "6576f5da9536c8221d360d2c" });

//   user.posts.push(post._id);

//   await user.save();
//   res.send("done");

//   // res.send(post);
// });

module.exports = router;
