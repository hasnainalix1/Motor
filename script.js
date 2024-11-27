const wrapper = document.querySelector('.wrapper');
const loginLink = document.querySelector('.login-link');
const registerLink = document.querySelector('.register-link');
const btnpopup = document.querySelector('.btnLogin-popup');
const iconClose = document.querySelector('.icon-close');


registerLink.addEventListener('click', () => {
  wrapper.classList.add('active');
});

loginLink.addEventListener('click', () => {
  wrapper.classList.remove('active');
});

btnpopup.addEventListener('click', () => {
  wrapper.classList.add('active-popup');
});

iconClose.addEventListener('click', () => {
  wrapper.classList.remove('active-popup');
});
function signup() {
  const username = document.getElementById("signup-username").value;
  const password = document.getElementById("signup-password").value;

  if (localStorage.getItem(username)) {
      alert("Username already exists!");
      return;
  }


  const user = {
      username: username,
      password: password
  };


  localStorage.setItem(username, JSON.stringify(user));

  alert("Signup successful!");
  document.getElementById("signup-form").reset();
}

function login() {
  const username = document.getElementById("login-username").value;
  const password = document.getElementById("login-password").value;

  const storedUser = JSON.parse(localStorage.getItem(username));

  if (!storedUser) {
      alert("User not found!");
      return;
  }

  if (storedUser.password === password) {
      alert("Login successful!");
      document.getElementById("login-form").reset();
  } else {
      alert("Incorrect password!");
  }
}

         const toggleBtn = document.getElementById("toggle-btn");
        const nav = document.querySelector(".navigation");

        toggleBtn.addEventListener("click", () => {
            nav.classList.toggle("active");
        });
