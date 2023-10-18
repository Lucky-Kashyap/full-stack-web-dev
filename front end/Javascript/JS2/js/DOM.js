/// DOM

// console.log("DOM");

let box = document.querySelector('.box');

let btn = document.querySelector('button');

let button = document.querySelector('.btn');

btn.addEventListener('click',()=>{
    box.classList.remove('remove');
})

button.addEventListener('click',()=>{
    console.log('remove');
    box.classList.add('remove');
})