const express = require("express");
const app = express();

app.get("/", function (req, res) {
  res.send("Learning Backend wih sheryians");
});

app.get("/profile", function (req, res) {
  res.send("Profile Route");
});

app.listen(5000);
