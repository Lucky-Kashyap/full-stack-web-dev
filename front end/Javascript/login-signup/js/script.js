// let login = document.querySelector('.login-page');
// let signUpPage = document.querySelector('.sign-page');
// let loginBtn = document.querySelector('.log');
// let signUp = document.querySelector('.sign');

// loginBtn.addEventListener('click',()=>{
//     login.classList.remove('login-page');
//     signUpPage.classList.add('hide');

// })

let signUp = document.querySelector(".sign-up");
let signIn = document.querySelector(".sign-in");
let floatEl = document.querySelector('.mid');


signUp.addEventListener('click',()=>{
    floatEl.style.left="0%";
});

signIn.addEventListener('click',()=>{
    // floatEl.style.right="0%";
    floatEl.style.left="50%";
})

