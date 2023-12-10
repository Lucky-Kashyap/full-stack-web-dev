var express = require("express");
var router = express.Router();

const userModel = require("./users");

/* GET home page. */
router.get("/", function (req, res) {
  res.render("index");
});

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

  let user = await userModel.find({ categories: { $all: ["wwe"] } });

  res.send(user);
});

// router.get("/checkkaro", (req, res) => {
//   console.log(req.flash("age"));
//   console.log(req.flash("name"));
//   res.send("check karlo backend ke terminal par");
// });

module.exports = router;
