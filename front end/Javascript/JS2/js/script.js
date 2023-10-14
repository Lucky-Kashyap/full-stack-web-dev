// variables
// it is a space where you can put some value for the program lifecycle
// dynamic language
// datatype decide on runtime

// var  keyword to declare variable

// var a = 57;

// var dulha = "chimku";
// var dulhan = "chimki";

// // var ex = "Badal";

// // chimku weds chimki

// console.log(dulha + " weds " + dulhan);

// dulha = "Badal";

// console.log(dulha + " weds " + dulhan);

// const a = 57;

// const dulha = "chimku";
// const dulhan = "chimki";

// // const ex = "Badal";

// // chimku weds chimki
// // const dulha = "chimku";
// console.log(dulha + " weds " + dulhan);

// dulha = "Badal";

// console.log(dulha + " weds " + dulhan);

// How complier work

// var a = 21;
// var b;

// console.log(a,b);

// Js work

// alert

// pop up

// alert('Pop Up)   // - method

// var a = "Hacked";

// alert(a);

// prompt -- question
//console.log()
// console.error()
// console.warn()

// day 47 - js

// var a = prompt("enter age");

// console.log(a);
// var username = prompt('enter name');

// alert(username);

// console.log("hey");

// console.error('error');

// console.warn('warning');

//variable
// user input

// var ans = prompt('name please');
// ans = prompt('renmae yourself');

// console.log(ans);

// ask two names from user

// var firstName = prompt('first name');
// var lastName = prompt('last name');

// console.log(firstName);
// console.log(lastName);

// ask name and age

// var user_name = prompt('name ');

// var age = prompt('age ');

// console.log(user_name,age);

// ask name and age and print age + 2

// var user_name = prompt("name ");

// var age = parseInt(prompt("age "));
// var age = Number(prompt("age "));

// age += 2;

// age = parseInt(age);

// console.log(user_name, age);

// if
// else
// if | else if | else
// ternary operator
// array

// day 48 JS 5

// conditionals

// if else else if

// jab situation kuch aisi ho, "AGAR" aisa ho to aisa kro "nhi" to esa kro

// if(true)

// any value which is true we can pass inside if()

// var someNumber = 20;

// if (5 > 4) {
//   console.log("greater");
// } else {
//   console.log("Less value");
// }

// ask user a name if its 'lucky' say congrats

// var user_name = prompt('User name');

// if(user_name === 'Lucky'){
//     console.log('Congrats');
// }
// else{
//     console.log('wrong value enter');
// }

// ask user a name if its 'lucky' say congrats , if its "Sumit" say hi, if smething
// else else say try again

// var user_name = prompt("User name");

// if (user_name === "Lucky") {
//   console.log("Congrats");
// }
// if (user_name === "Lucky") {
//   console.log("Hi");
// }
// if(user_name==='Sumit'){
//     console.log('Hi');
// }
// else {
//   console.log("wrong value enter");
// }

// if(user_name === 'Lucky'){
//     console.log('Congrats');
// }
// else if(user_name==='Sumit'){
//     console.log('Hi');
// }
// else{
//     console.log('wrong value enter');
// }

// ternary

// single line
// condition ? do something f condition went true: do something  if false

// var ans = 5 > 4 ? console.log("greater") : console.log("Less value");

// console.log(ans);

// app login email => abcd@gmail.com pass=> 123456

// if(email == database.email){
//     if(pass == database.password){
//         // perform login
//     }else{
//         console.log('wrong password');
//     }
// }
// else{
// console.log('invalid email');
// }

// array
// when you have multiple values to store

// when you have more than one details to store, and both of those
// details are related to each other, at this point of time you can store
// in something called Array

// a data storage whch can store one or more than one data together

// take 5 username

// var arr = [1, true, undefined, null, "string"];

// console.log(arr);

// var u1 = 'Lucky';
// var u2 = 'Sumit';
// var u3 = 'Amar';
// var u4 = 'Trijal'
// var u5 = 'Ajay';

// var user_name = [u1,u2,u3,u4,u5];

// console.log(user_name);

// access using array index

// console.log(user_name[3]);

// console.log(user_name[-1]); // undefined

// day 49 js - 6

// array method

// var arr = [1,2,3,4,5];

// arr.push(10);  // add element from last

// arr.pop();    // remove element from last

// arr.shift();   // reomve element from first index
// arr.unshift(10);  // add element in first index
// console.log(arr);

// var arr = [1, 2, 3, 4, 5];

// var newArr = arr.splice(0,4);

// console.log(newArr);

// console.log(arr);

// console.log(arr.length);

// loops - for , while , foreach

// for repetition task

// print 4 time 'hello'

// for(let i=0;i<4;i++){
//     console.log('Hello');
// }

// for(var i=0;i<50;i++){
//     console.log(i);
// }

// print 50 number in the row and exclude 6

// for (var i = 0; i < 50; i++) {
//   if (i == 6) {
//     continue;
//   }

//   console.log(i);
// }

// var i = 0;

// while (i < 5) {
//   console.log(i);
//   i++;
// }

// day 50 js - 7

// print 50 numbers in the row and exclude 6

// for(var a =1;a<=50;a++){
//     if(a!=6){
//         console.log(a);
//     }
// }

// for - tab use hota hain jab aapke pass initializer, limiter and changes ke baarein me pta hai

// while - jab sirf apke pass final destination pta ho

// print hello until num become less than 3

// var num =30;

// while(num>3){
//     console.log('Hello');

//     num--;
// }

// forEach ---  sabke liyein run krna

// for each only run with array

// var arr = [1, 2, 3, 4, 5, 6];

// arr.forEach((el) => console.log(el * 2));

// console.log(arr);

// a is an array which will be given to for each loop and this loop
// will take a function as a parameter and that function will take a parameter
// as named el

// var a = ["lucky", "ajay", "arun", "nikita", "shiv", "anjali"];

// a.forEach((el) => console.log(el));

// a.forEach((el) => console.log(el + " is good..!"));

// use case when ever you have an array and you want to perform
// a particular operation on every member of the array

// functions

// es 5 es 6

// function statement, function expression, function anonymous

// 1.

// function apple(){
// function statement
// }

// 2. function exression

// const apple = function(){

// }

// 3. anonymous function

// function(){

// }

// es 6 function  arrow function , arrow function with one parameter , arrow function with impicit return

// fat arrow function

// const apple =()=>{

// }

// const apple = (val)=>{

// }

// const apple = num => num;
