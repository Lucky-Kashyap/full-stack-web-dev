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

// router.get("/checkkaro", (req, res) => {
//   console.log(req.flash("age"));
//   console.log(req.flash("name"));
//   res.send("check karlo backend ke terminal par");
// });

module.exports = router;
