let signUpBtn = document.querySelector('.signupbtn');
let signInBtn = document.querySelector('.signinbtn');
let nameField = document.querySelector('.namefield');
let title = document.querySelector('.title');
let underline = document.querySelector('.underline');
let text=document.querySelector('.text');

signInBtn.addEventListener('click',()=>{
    nameField.style.maxHeight = '0';
    title.innerHTML= 'Sign In';
    text.innerHTML= 'Lost Password? ';
    signUpBtn.classList.add('disable');
    signInBtn.classList.remove('disable');
});
signUpBtn.addEventListener('click',()=>{
    nameField.style.maxHeight = '5rem';
    title.innerHTML= 'Register';
    text.innerHTML= 'Password Suggestions? ';
    signUpBtn.classList.remove('disable');
    signInBtn.classList.add('disable');
});