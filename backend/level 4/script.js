const express = require("express");

const app = express();

app.set("view engine", "ejs");

app.use(express.static("./public"));

const data = {
  name: "Lucky",
  age: 23,
  work: "Developer",
  address: "Kalindi Vihar",
};

app.get("/", (req, res) => {
  res.render("index", { data });
});

app.listen(5500);
