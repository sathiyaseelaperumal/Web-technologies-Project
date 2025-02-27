let userData = JSON.parse(localStorage.getItem('signupData'));

if (!userData || !userData.username) {
    alert('invalid session, please login properly');
} else {
    let messageAlert = document.getElementById('message');
    messageAlert.textContent = `welcome to ${userData.username}`;
}

let logout = document.getElementById('logout');
logout.addEventListener('click', (e) => {
    e.preventDefault();
    alert("The user is logged out");
    window.location.href = 'login.html';
});

let men = document.getElementById('men');
men.addEventListener('click', (e) => {
    e.preventDefault();
    window.location.href = "mens.html";
});

let kid = document.getElementById('kid');
kid.addEventListener('click', (e) => {
    e.preventDefault();
    window.location.href = "kids.html";
});
