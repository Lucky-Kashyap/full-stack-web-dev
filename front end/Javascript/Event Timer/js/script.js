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

let count = 60;
let time = document.querySelector("h2");

let btn = document.querySelector("button");

btn.addEventListener("click", () => {
  let id = setInterval(() => {
    time.innerHTML = --count;

    if (count == 50) {
      time.innerHTML = 0;
      clearInterval(id);
    }
  }, 1000);
});
// let id = setInterval(() => {

//   time.innerHTML = count--;

//   if (count == 50) {
//     time.innerHTML = 0;
//     clearInterval(id);
//   }
// }, 1000);
