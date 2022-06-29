const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');

form.addEventListener('submit', e => {
    e.preventDefault();
    
    validateInputs();

    
});

const setError = (element, message) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = message;
    inputControl.classList.add('error');
    inputControl.classList.remove('success')
}

const setSuccess = element => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = '';
    inputControl.classList.add('success');
    inputControl.classList.remove('error');
};

const isValidEmail = email => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

const isValidMobile = mob => {
    const re = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
    return re.test(String(mob).toLowerCase());
}

const validateInputs = () => {
    const usernameValue = username.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();
    const password2Value = password2.value.trim();
    const mobValue = mob.value.trim();
   

    if(usernameValue === '') {
        setError(username, 'Username is required');
    } else {
        setSuccess(username);
        var a='1';
    }

    if(emailValue === '') {
        setError(email, 'Email is required');
    } else if (!isValidEmail(emailValue)) {
        setError(email, 'Provide a valid email address');
    } else {
        setSuccess(email);
        var b='1';
    }

    if(mobValue === '') {
        setError(mob, 'Mobile is required');
    } 
    else if (!isValidMobile(mobValue)) {
        setError(mob, 'Provide a valid mobile number');
    } else {
        setSuccess(mob);
        var e='1';
    }

    if(passwordValue === '') {
        setError(password, 'Password is required');
    } else if (passwordValue.length < 8 ) {
        setError(password, 'Password must be  8 character.')
    } else {
        setSuccess(password);
        var c='1';
    }

    if(password2Value === '') {
        setError(password2, 'Please confirm your password');
    } else if (password2Value !== passwordValue) {
        setError(password2, "Passwords doesn't match");
    } else {
        setSuccess(password2);
        var d='1';
        
    }
    if(a=='1' && b=='1' && c=='1' && d=='1' && e=='1')
    {
        form.submit();
    }


};

function validate_emailid()
{
    const emailValue = email.value.trim();
    if(emailValue === '') {
        setError(email, 'Email is required');
    } else if (!isValidEmail(emailValue)) {
        setError(email, 'Provide a valid email address');
    } else {
        setSuccess(email);
    }
    
}


function validate_mob()
{
    const mobValue = mob.value.trim();
    if(mobValue === '') {
        setError(mob, 'Mobile is required');
    } else if (!isValidMobile(mobValue)) {
        setError(mob, 'Provide a valid mobile number');
    } else {
        setSuccess(mob);
    }
    
}

function validate_name()
{
    const usernameValue = username.value.trim();
    
    if(usernameValue === '') {
        setError(username, 'Username is required');
    } else {
        setSuccess(username);
    }
    
}

function validate_password()
{
    const passwordValue = password.value.trim();
    const password2Value = password2.value.trim();
    
   if(passwordValue === '') {
        setError(password, 'Password is required');
    } else if (passwordValue.length < 8 ) {
        setError(password, 'Password must be  8 character.')
    } else {
        setSuccess(password);
    }

    
}

function validate_password2()
{
    const passwordValue = password.value.trim();
    const password2Value = password2.value.trim();
   
if(password2Value === '') {
    setError(password2, 'Please confirm your password');
} else if (password2Value !== passwordValue) {
    setError(password2, "Passwords doesn't match");
} else {
    setSuccess(password2);
}

    
}


// ///////////////////////////////////////////////////////////////////////

let passwordInput = document.querySelector('#passwordInput input[type="password"]');
let passwordStrength= document.getElementById('passwordStrength');
let poor = document.querySelector('#passwordStrength #poor');
let weak = document.querySelector('#passwordStrength #weak');
let strong = document.querySelector('#passwordStrength #strong');
let passwordInfo = document.getElementById('passwordInfo');

let poorRegExp = /[a-z]/;
let weakRegExp = /(?=.*?[0-9])/;;
let strongRegExp = /^[A-Za-z]\w{7,14}$/;
let whitespaceRegExp = /^$|\s+/;
let specialchar = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;
passwordInput.oninput= function(){

     let passwordValue= passwordInput.value;
     
     let passwordLength= passwordValue.length;
     let poorPassword= passwordValue.match(poorRegExp);
     let weakPassword= passwordValue.match(weakRegExp);
     let strongPassword= passwordValue.match(strongRegExp);
     let whitespace= passwordValue.match(whitespaceRegExp);
     let specialchar1= passwordValue.match(specialchar);
if(passwordValue != ""){
 passwordStrength.style.display = "block";
 passwordStrength.style.display = "flex";
 passwordInfo.style.display = "block";
 passwordInfo.style.color = "black";
 if(whitespace)
 {
  passwordInfo.textContent = "whitespaces are not allowed";
 }
 if(specialchar1)
 {
  passwordInfo.textContent = "specialchar are not allowed";
 }
 else{
 poorPasswordStrength(passwordLength, poorPassword, weakPassword, strongPassword);
 weakPasswordStrength(passwordLength, poorPassword, weakPassword, strongPassword);
 strongPasswordStrength(passwordLength, poorPassword, weakPassword, strongPassword);
}
 
}else{
 
 passwordStrength.style.display = "none";
 passwordInfo.style.display = "none";

}
}
function poorPasswordStrength(passwordLength, poorPassword, weakPassword, strongPassword){
  if(passwordLength <= 3 && (poorPassword || weakPassword || strongPassword))
    {
   poor.classList.add("active");
   passwordInfo.style.display = "block";
   passwordInfo.style.color = "red";
   passwordInfo.textContent = "Your password is too Poor";
      
    }
}
function weakPasswordStrength(passwordLength, poorPassword, weakPassword, strongPassword){
if(passwordLength>= 4 && poorPassword && (weakPassword || strongPassword))
{
 weak.classList.add("active");
 passwordInfo.textContent = "Your password is Weak";
 passwordInfo.style.color = "orange";

}else{
 weak.classList.remove("active");
 
}
}
function strongPasswordStrength(passwordLength, poorPassword, weakPassword, strongPassword){
if(passwordLength >= 6 && (poorPassword && weakPassword) && strongPassword)
{
 poor.classList.add("active");
 weak.classList.add("active");
 strong.classList.add("active");
 passwordInfo.textContent = "Your password is strong";
 passwordInfo.style.color = "green";
}else{
 strong.classList.remove("active");
 
}
}
// let showHide = document.querySelector('#passwordInput #showHide');
// showHide.onclick = function(){
//   showHidePassword()
// }
// function showHidePassword(){
// if(passwordInput.type == "password"){
// passwordInput.type = "text";
// showHide.textContent = "HIDE";
// showHide.style.color = "green";
// }else{
// passwordInput.type = "password";
// showHide.textContent = "SHOW";
// showHide.style.color = "red";
// }
// }