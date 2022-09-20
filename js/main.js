let users = [
    { name: 'John', password: "abcd" },
    { name: 'TonyNogueron', password: "1234" },
];


function login() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    for (let i = 0; i < users.length; i++) {
        if (username === users[i].name && password === users[i].password) {
            window.location.href = "mainUI.html";
            return;
        }
    }
    alert("Username or password is incorrect");
}

function register() {
    window.location.href = "register.html";
}
