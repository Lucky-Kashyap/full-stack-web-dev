var express = require("express");
var router = express.Router();

const userModel = require("./users");

/* GET home page. */
router.get("/", function (req, res, next) {
  // req.session.koibhinam = "lucky kashyap";
  req.session.ban = true;
  res.render("index", { title: "Express" });
  // res.send("hello");
});

router.get("/checksession", (req, res) => {
  if (req.session.ban === true) {
    res.send("You are banned");
  } else {
    res.send("nahi hua banned");
  }
  // console.log(req.session);
  // res.send("check kiya hai console dekho");
});

router.get("/removeban", (req, res) => {
  req.session.destroy((err) => {
    if (err) throw Error(err);

    console.log(err);
    res.send("ban remove");
  });
});

const users = [
  {
    username: "lucky",
    age: 25,
    name: "divyanshu",
  },
  {
    username: "ajay",
    age: 22,
    name: "ajay",
  },
  {
    username: "rahul",
    age: 27,
    name: "rahul",
  },
  {
    username: "sachin",
    age: 23,
    name: "sachin",
  },
];

router.get("/create", async (req, res) => {
  const createdUser = await userModel.create(users);

  res.send(createdUser);
});

router.get("/allusers", async (req, res) => {
  let user = await userModel.find();
  // let user = await userModel.findOne({ username: "lucky" });

  // let user = await userModel.findOne({ username: "ajay" });

  res.send(user);
});

router.get("/delete", async (req, res) => {
  let deletedUser = await userModel.findOneAndDelete({
    username: "lucky",
  });

  res.send(deletedUser);
});

module.exports = router;
