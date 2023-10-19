// let time = document.querySelector('h2');

// function getTime(){
//     time.innerHTML=new Date().getTime();
// }

// const now = new Date();

// const hours = now.getHours();         // Get the current hour (0-23)
// const minutes = now.getMinutes();     // Get the current minute (0-59)
// const seconds = now.getSeconds();     // Get the current second (0-59)
// const milliseconds = now.getMilliseconds(); // Get the current millisecond (0-999)

// console.log(`Current time: ${hours}:${minutes}:${seconds}.${milliseconds}`);

// console.log(new Date.getTime());

// let t = new Date();

// t.time();
// console.log(t.getTime());

// getTime();

// setInterval(()=>{
//         let time = document.querySelector('h2');

//         let t1 =new Date();

//         t1.getSeconds();
//         time.innerHTML=t1;
// },1000);

// let count = 60;
// let time = document.querySelector("h2");

// let btn = document.querySelector("button");

// btn.addEventListener("click", () => {
//   let id = setInterval(() => {
//     time.innerHTML = --count;

//     if (count == 50) {
//       time.innerHTML = 0;
//       clearInterval(id);
//     }
//   }, 1000);
// });

// let id = setInterval(() => {

//   time.innerHTML = count--;

//   if (count == 50) {
//     time.innerHTML = 0;
//     clearInterval(id);
//   }
// }, 1000);

let days = document.querySelector("#days h2");
let hours = document.querySelector("#hours h2");
let min = document.querySelector("#min h2");
let sec = document.querySelector("#sec h2");

// let today = new Date();
// let futureDate = new Date(2024, 0, 1, 0, 0, 0, 0);

// let diff = futureDate - today;

// let seconds  = parseInt(diff/1000);
// let minutes = parseInt((diff/(1000*60)));
// let hoursDiff = parseInt((diff/(1000 * 60 * 60)));
// let dayDiff = parseInt((diff/(1000 * 60 * 60 * 24)));

// let seconds = Math.floor(diff / 1000);
// let minutes = Math.floor(diff / (1000 * 60));
// let hoursDiff = Math.floor(diff / (1000 * 60 * 60));
// let dayDiff = Math.floor(diff / (1000 * 60 * 60 * 24));

// hoursDiff = hoursDiff % 24;
// minutes = minutes % 60;
// seconds = seconds % 60; 

setInterval(()=>{
    let today = new Date();
let futureDate = new Date(2024, 0, 1, 0, 0, 0, 0);

let diff = futureDate - today;
    let seconds = Math.floor(diff / 1000);
let minutes = Math.floor(diff / (1000 * 60));
let hoursDiff = Math.floor(diff / (1000 * 60 * 60));
let dayDiff = Math.floor(diff / (1000 * 60 * 60 * 24));

hoursDiff = hoursDiff % 24;
minutes = minutes % 60;
seconds = seconds % 60
    days.innerHTML=dayDiff;
    hours.innerHTML=hoursDiff;
    min.innerHTML=minutes;
    sec.innerHTML=seconds;
},1000);

// setInterval(() => {
  //     let diff = futureDate-today;
  //     let seconds  = parseInt(diff/1000);
  // let minutes = parseInt((diff/(1000*60)));
  // let hoursDiff = parseInt((diff/(1000 * 60 * 60)));
  // let dayDiff = parseInt((diff/(1000 * 60 * 60 * 24)));
    //   days.innerHTML=seconds;
    //   hours.innerHTML=minutes;
    //   min.innerHTML=hoursDiff;
    //   sec.innerHTML=dayDiff;
  // let date = new Date();
  // days.innerHTML=date.getDate();
  // hours.innerHTML=date.getHours();
  // min.innerHTML=date.getMinutes();
  // sec.innerHTML=date.getSeconds();
// }, 1000);


