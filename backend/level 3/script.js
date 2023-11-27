const express = require("express");
const app = express();

app.set("view engine", "ejs");

// app.use((req, res, next) => {
// res.send("middle ware");
// console.log(next);
// console.log(req);
// console.log("middle war");
// next();
// });

app.use(express.static("./public"));

app.get("/", function (req, res) {
  // console.log(req);
  // res.send("Hello World");

  res.render("index", { age: 23 });
});

app.get("/error", (req, res, next) => {
  throw Error("Something Went Wrong");
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

app.get("/about", function (req, res) {
  // res.send("hello from contact");
  res.render("about", { name: "lucky" });
});

app.use(function errorHandler(err, req, res, next) {
  if (res.headersSent) {
    return next(err);
  }
  res.status(500);
  res.render("error", { error: err });
});

app.listen(5500);
