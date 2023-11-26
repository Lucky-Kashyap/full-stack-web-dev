const express = require("express");
const app = express();

app.use((req, res, next) => {
  console.log("hello from Middle Ware...!");
  next();
});
app.get("/", function (req, res) {
  res.send("Learning Backend wih sheryians");
});

app.get("/profile", function (req, res) {
  res.send("Profile Route");
});

app.listen(5000);
