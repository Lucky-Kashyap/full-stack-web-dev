var figlet = require("figlet");

figlet("Hello World!!", function (err, data) {
  if (err) {
    console.log("Something went wrong...");
    console.dir(err);
    return;
  }
  console.log(data);
});

// var oneLinerJoke = require("one-liner-joke");

// var getRandomJoke = oneLinerJoke.getRandomJoke();
// console.log(getRandomJoke);

// var chacha = require("./import_export");

// declare variable

// var a = 12;

// var b = 22;

// var c = 45;

// console.log(chacha);
