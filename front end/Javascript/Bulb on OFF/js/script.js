console.log("Bulb ON OFF");

// let on = document.querySelector(".on");
// let off = document.querySelector(".off");
let bulb = document.querySelector(".bulb");
let toggleBtn = document.querySelector(".toggle");

// on.addEventListener("click", () => {
//   bulb.classList.add("active");
// });

// off.addEventListener("click", () => {
//   bulb.classList.remove("active");
// });

var lightStatus = false;

toggleBtn.addEventListener("click", () => {
  // bulb.classList.toggle("active");

  if(lightStatus == false){
    bulb.style.backgroundColor='orange';
    lightStatus=true;
  }
  else{
    bulb.style.backgroundColor='#fff';
    lightStatus=false;
  }



  // lightStatus=true;

  // if(lightStatus){
  //   toggleBtn.innerHTML="OFf Bulb";
  //   lightStatus=false;
  // }
  // toggleBtn.classList.toggle('add');
});
