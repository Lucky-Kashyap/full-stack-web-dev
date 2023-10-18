// selection
// change

// console.log(document.documentElement);

// change heading

// document.querySelector('h1').innerHTML='MODAL PRACTICE';

// let heading = document.querySelector('h1');

// heading.style.backgroundColor='orange';
// heading.style.color='red';

var cross = document.querySelector("span");
var card = document.querySelector(".card");
var button =document.querySelector('button');

cross.addEventListener("click", () => {
  card.classList.remove("show");
});


button.addEventListener('click',()=>{
    // card.style.display='block';
    card.classList.add('show');
})