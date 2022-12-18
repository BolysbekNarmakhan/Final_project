//sign in
const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const passsword = document.getElementById('passsword');


form.addEventListener('submit',(e)=>{
    e.preventDefault();

    checkInputs();
} );

function checkInputs(){
    const usernameValue = username.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();
    const passswordValue = passsword.value.trim();
    if(usernameValue === ''){
               //show error
        setErrorFor(username,"Username can not be blank");
    }else{
              //add succes class
        setSuccessFor(username);
    }
    if(emailValue === ''){
        setErrorFor(email , 'Email cannot be blank');
    } else if (!isEmail(emailValue)) {
        setErrorFor(email, 'Email is not valid');
    } else {
        setSuccessFor(email);
    }

    if(passwordValue === ''){       
        //show error
        setErrorFor(password, "Password can not be blank");
    } else {
                //add succes class
        setSuccessFor(password);
    
    } 
    if(passswordValue === ''){       
        setErrorFor(passsword,"Password can not be blank");
    }else if(passwordValue !== passswordValue){
        setErrorFor(passsword,"Password does not match");
    }else{
        setSuccessFor(passsword);
    
    }
}



function setErrorFor(input,message){
    const formControl = input.parentElement;
    const small = formControl.querySelector('small');

    small.innerText = message;

    formControl.className = 'form-control error';
}

function setSuccessFor(input){
    const formControl = input.parentElement;
    formControl.className ='form_control succes'
}

function isEmail(email){
    return  /[0-9][_-=!@#$%^&*()][a-zA-Z]/.test(email);
}


//podelit
    let toggle=document.querySelector('.toggle');
    let menu=document.querySelector('.menu');
    toggle.onclick =function(){
        menu.classList.toggle('active')
    }

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry)=> {
        console.log(entry)
        if(entry.isIntersecting){
            entry.target.classList.add('show');
        }else {
            entry.target.classList.remove('show');
        }
    });
});
    
const passElement = document.querySelectorAll('.pass');
passElement.forEach((el) => observer.observe(el));