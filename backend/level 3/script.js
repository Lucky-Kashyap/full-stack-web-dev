const express = require("express");
const app = express();

app.set("view engine", "ejs");

app.use((req, res, next) => {
  // res.send("middle ware");
  // console.log(next);
  // console.log(req);
  console.log("middle war");
  next();
});

app.get("/", function (req, res) {
  // console.log(req);
  // res.send("Hello World");

  res.render("index");
});

app.get("/profile", function (req, res) {
  res.send("Hello from profile");
});

app.get("/profile/:username", function (req, res) {
  const { username } = req.params;
  // res.send("Hello from profile");
  res.send(`Hello ${username}`);
});

app.get("/contact", function (req, res) {
  res.send("hello from contact");
});

app.listen(5500);
