var express = require("express");
var router = express.Router();

const userModel = require("./users");

const localStrategy = require("passport-local");
const passport = require("passport");

passport.use(new localStrategy(userModel.authenticate()));

/* GET home page. */
router.get("/", function (req, res) {
  res.render("index");
});

router.post("/register", (req, res) => {
  let userdata = new userModel({
    username: req.body.username,
    password: req.body.password,
    secret: req.body.secret,
  });

  userModel
    .register(userdata, req.body.password)
    .then(function (registeredUser) {
      passport.authenticate("local")(req, res, function () {
        res.redirect("/profile");
      });
    });
});

router.get("/profile", isLoggedIn, (req, res) => {
  res.send("welcome to profile");
});

router.post(
  "/login",
  passport.authenticate("local", {
    successRedirect: "/profile",
    failureRedirect: "/",
  }),
  function (req, res) {}
);

router.get("/logout", (req, res, next) => {
  req.logOut(function (err) {
    if (err) {
      return next(err);
    }
    res.redirect("/");
  });
});

function isLoggedIn(req, res, next) {
  if (req.isAuthenticated()) {
    return next();
  } else {
    res.redirect("/");
  }
}

router.get("/failed", function (req, res) {
  // req.flash("age", 23);
  // req.flash("name", "Lucky Kashyap");
  // res.render("index");

  res.send("ban gaya data");
});

router.get("/create", async (req, res) => {
  let userData = await userModel.create({
    username: "Lucky",
    nickname: "Divyanshu",
    description: "I am guy of 23 and i love everything about js, node & react",
    categories: ["js", "node", "react", "gsap", "modern animations"],
  });

  // let userData = await userModel.create({
  //   username: "harsh",
  //   nickname: "async javascriptor",
  //   description: "I am guy of 25 and i love everything about js, node & react",
  //   categories: ["js", "node", "modern animations"],
  // });

  // let userData = await userModel.create({
  //   username: "ajay",
  //   nickname: "ajju",
  //   description: "ajay bhai hu mein",
  //   categories: ["fight", "wwe", "life"],
  // });

  res.send(userData);
});

// find

router.get("/find", async (req, res) => {
  // let user = await userModel.find({ username: "ajay" });

  // let regex = new RegExp("Ajay", "i");

  // let regex = new RegExp("^harsh$", "i");

  // let user = await userModel.find({ username: regex });

  // let user = await userModel.findOne({ username: regex });

  // let user = await userModel.find();

  // let user = await userModel.find({ categories: { $all: ["wwe"] } });

  // let date1 = new Date('yy-mm-dd');

  // let date1 = new Date("2023-12-10");

  // let date2 = new Date("2023-12-12");

  // let user = await userModel.find({
  //   datecreated: { $gte: date1, $lte: date2 },
  // });

  // let user = await userModel.find({ categories: { $exists: true } });

  let user = await userModel.find({
    $expr: {
      $and: [
        { $gte: [{ $strLenCP: "$nickname" }, 0] },
        { $lte: [{ $strLenCP: "$nickname" }, 12] },
      ],
    },
  });

  res.send(user);
});

// router.get("/checkkaro", (req, res) => {
//   console.log(req.flash("age"));
//   console.log(req.flash("name"));
//   res.send("check karlo backend ke terminal par");
// });

module.exports = router;
