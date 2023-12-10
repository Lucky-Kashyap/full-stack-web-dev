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

  res.send(userData);
});

// router.get("/checkkaro", (req, res) => {
//   console.log(req.flash("age"));
//   console.log(req.flash("name"));
//   res.send("check karlo backend ke terminal par");
// });

module.exports = router;
