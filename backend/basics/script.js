// var figlet = require("figlet");

// figlet("Hello World Using Figlet!!", function (err, data) {
//   if (err) {
//     console.log("Something went wrong...");
//     console.dir(err);
//     return;
//   }
//   console.log(data);
// });

// var oneLinerJoke = require("one-liner-joke");

// var getRandomJoke = oneLinerJoke.getRandomJoke();
// console.log(getRandomJoke);

// var chacha = require("./import_export");

// declare variable

// var a = 12;

// var b = 22;

// var c = 45;

// console.log(chacha);

// Process object

// console.log(process);
// console.log(process.cwd());

// let args = process.argv;

// for (let i = 0; i < args.length; i++) {
//   console.log(args[i]);
// }

// console.log(process.argv);

// module.exports

// const someValue = require("./math");

// console.log(someValue);

// console.log(someValue.sum(12, 34));

// console.log(someValue.PI);

// Requiring Directories

// const someValue = require("./operations");

// console.log(someValue);

// console.log(someValue.sum(12, 2));
// console.log(someValue.div(4, 2));

import { sum } from "./math.js";

console.log(sum(2, 4));
