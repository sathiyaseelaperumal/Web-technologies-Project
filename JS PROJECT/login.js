let form=document.getElementById('loginForm');
let email=document.getElementById('email');
let password=document.getElementById('password');


let emailError=document.getElementById('emailError');
let passwordError=document.getElementById('passwordError');

form.addEventListener('submit',(e)=>{
    e.preventDefault();
    let valid=true;

    email.textContent='';
    password.textContent='';
    
    if(!email.validity.valid)
    {
        emailError.textContent="Enter valid email";
        emailError.style.color="red";
        email.focus();
      
    
    }
    else{
        emailError.textContent='';
    }
    if(password.value.length<3)
    {
        passwordError.textContent="Enter minimum 3 characters";
        passwordError.style.color="red";
        valid=false;
    }
    else{
        passwordError.textContent='';
    }



    if(valid)
    {
    let storeData=JSON.parse(localStorage.getItem('signupData'));
  
   
    if(!storeData)
    {
        alert("user not found,please signin");
        return;
    }
    if(email.value==storeData.email && password.value==storeData.password)
   {
    alert("login is successfull");
    window.location.href="Home.html"
   }
   else{
      alert('invalid credentials')
   }

}

});