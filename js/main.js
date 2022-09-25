
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

function addRegister() {
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;
  const passwordConfirmation = document.getElementById("confirmPassword").value;
  if (password !== passwordConfirmation) {
      alert("Passwords do not match");
      return;
  }
  for (let i = 0; i < users.length; i++) {
      if (username === users[i].name) {
          alert("Username already exists");
          return;
      }
  }
  users.push({ name: username, password: password });
  window.location.href = "index.html";
}

function cancelRegister() {
  document.getElementById("login").style.display = "block";
  document.getElementById("register_background").style.display = "none";
}

function returnMain() {
  window.location.href = "index.html";
}


function animateToRegister() {
  document.getElementById("login").style.display = "none";
  document.getElementById("register_background").style.display = "block";

}