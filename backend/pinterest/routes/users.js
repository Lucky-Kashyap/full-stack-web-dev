const mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/pinterest-clone");

const userSchema = mongoose.Schema({});

module.exports = mongoose.model("user", userSchema);
