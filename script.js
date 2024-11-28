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

// signup 
   document.getElementById("signupForm").addEventListener("submit", function(e) {
      e.preventDefault(); 

      const username = document.getElementById("username").value;
      const password = document.getElementById("password").value;
      const email = document.getElementById("email").value;
      const termsAccepted = document.getElementById("terms").checked;

      if (!termsAccepted) {
        alert("You must accept the Terms and Conditions to sign up.");
        return;
      }

      if (!email.endsWith('@gmail.com')) {
        alert("Please use a Gmail address.");
        return;
      }

      const users = JSON.parse(localStorage.getItem("users")) || [];
      if (users.some(user => user.username === username)) {
        alert("Username already taken!");
        return;
      }

      const newUser = { username, password, email };

      users.push(newUser);
      localStorage.setItem("users", JSON.stringify(users));

      alert("User signed up successfully!");
      window.location.href = "login.html"; 
    });

// login
  document.getElementById("loginForm").addEventListener("submit", function(e) {
      e.preventDefault();

      const username = document.getElementById("username").value;
      const password = document.getElementById("password").value;

      const users = JSON.parse(localStorage.getItem("users")) || [];
      const user = users.find(user => user.username === username);

 if (!email || !password) {
    alert("All fields are required!");
    return;
  }

  // Check if user exists and password matches
  const user = users.find((user) => user.email === email && user.password === password);
  if (!user) {
    alert("Invalid email or password!");
    return;
  }
     else if (user.password !== password) {
        alert("Incorrect password!");
      } else {
        alert("Login successful!");
        window.location.href = "welcome.html"; 
      }
   });
