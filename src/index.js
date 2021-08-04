import './style.css';

let pass;
let confirm;
let zip;
let email;

function checkConfirmPass() {
    // console.log(confirm.validity);
    // return;
    // check if the passwords match
    if (!(confirm.value == pass.value)) {
        confirm.setCustomValidity("Passwords much match");

    } else {
        confirm.setCustomValidity("");
    }
    confirm.reportValidity();
}

function checkZip(){
    if (/(^\d{5}$)|(^\d{5}-\d{4}$)/.test(zip.value) == false){
        zip.setCustomValidity("zipcode must be 5 numbers");
    } else {
        zip.setCustomValidity("");
    }
    zip.reportValidity();
}

function checkEmail(){
    if(!email.checkValidity()){
        // email.setCustomValidity("enter a valid email address");
        email.reportValidity();
    }
}

function addListeners() {
    pass.addEventListener('change', checkConfirmPass);
    confirm.addEventListener('change', checkConfirmPass);
    zip.addEventListener('change', checkZip);
    email.addEventListener('change', checkEmail);
}

function initializeStuff() {
    pass = document.querySelector('#password');
    confirm = document.querySelector('#confirmPass');
    zip = document.querySelector('#zip');
    email= document.querySelector('#email');
}

initializeStuff();
addListeners();
