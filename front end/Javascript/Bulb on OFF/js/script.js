console.log("Bulb ON OFF");

// let on = document.querySelector(".on");
// let off = document.querySelector(".off");
let bulb = document.querySelector(".bulb");
let toggleBtn = document.querySelector('.toggle');

// on.addEventListener("click", () => {
//   bulb.classList.add("active");
// });

// off.addEventListener("click", () => {
//   bulb.classList.remove("active");
// });

toggleBtn.addEventListener('click',()=>{
  bulb.classList.toggle('active');
})
