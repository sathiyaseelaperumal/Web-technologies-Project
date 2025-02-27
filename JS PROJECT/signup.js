  let formContainer = document.getElementById('form-container');

    formContainer.style.position = 'absolute';
    formContainer.style.top = '50%';
    formContainer.style.left = '50%';
    formContainer.style.transform = 'translate(-50%, -50%)';
    formContainer.style.width = '100%';
    formContainer.style.maxWidth = '400px';
    formContainer.style.padding = '20px';
    formContainer.style.border = '3px solid black';
    formContainer.style.borderRadius = '10px';
    
    let formGroups = document.querySelectorAll('#form-group');
    formGroups.forEach(function(group) {
        group.style.marginBottom = '15px';
    });

  
    let labels = document.querySelectorAll('label');
    labels.forEach(function(label) {
        label.style.display = 'block';
    });

    
    let inputs = document.querySelectorAll('input');
    inputs.forEach(function(input) {
        input.style.width = '100%';
        input.style.padding = '8px';
        input.style.border = '1px solid #ccc';
        input.style.borderRadius = '5px';
    });

   
    let errorSpans = document.querySelectorAll('.errors');
    errorSpans.forEach(function(span) {
        span.style.color = 'red';
    });

    let signupButton = document.querySelector('.submit-btn');
    signupButton.style.width = '100%';
    signupButton.style.padding = '10px';
    signupButton.style.backgroundImage = 'linear-gradient(to right, orange, yellow)';
    signupButton.style.border = '1px solid black';
    signupButton.style.borderRadius = '5px';

  
    let footer = document.querySelector('.form-footer');
    footer.style.textAlign = 'center';
    footer.style.marginTop = '10px';



let form = document.getElementById('signup-form');
let username = document.getElementById('username');
let email = document.getElementById('mail');    
let password = document.getElementById('password');
let confirmPassword = document.getElementById('confirmpassword');

let usernameError = document.getElementById('usernameerrors');
let mailError = document.getElementById('mailerrors');
let passwordError = document.getElementById('passworderrors');
let confirmPasswordError = document.getElementById('confirmpassworderrors');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    let valid = true;

    
    usernameError.textContent = '';
    mailError.textContent = '';
    passwordError.textContent = '';
    confirmPasswordError.textContent = '';

   
    if (username.value.trim().length < 3) {
        valid = false;
        usernameError.textContent = "Enter at least 3 characters.";
        username.style.color = "red";
    }

    
    if (!email.validity.valid) {
        valid = false;
        mailError.textContent = "Enter a valid email address.";
        mailError.style.color = "red";
        email.style.color = "red";
        email.focus(); 
    }

    
    if (password.value.length < 6) {
        valid = false;
        passwordError.textContent = "Password must be at least 6 characters.";
        password.style.color = "red"; 
    }

 
    if (password.value !== confirmPassword.value) {
        valid = false;
        confirmPasswordError.textContent = "Passwords do not match.";
        confirmPasswordError.style.color = "red";
        confirmPassword.style.color = "red"; 
    }

   
    if (valid) {
        let userData = {
            username: username.value,
            email: email.value,
            password: password.value
        };

        localStorage.setItem("signupData", JSON.stringify(userData));
        alert("Signup successful! Redirecting to login page...");
        form.reset();
        window.location.href = "login.html"; 
    }
});
