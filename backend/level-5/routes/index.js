var express = require("express");
var router = express.Router();

const userModel = require("./users");

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Express" });
  // res.send("hello");
});

router.get("/create", async (req, res) => {
  const createdUser = await userModel.create({
    username: "lucky",
    age: 25,
    name: "divyanshu",
  });

  res.send(createdUser);
});

module.exports = router;
