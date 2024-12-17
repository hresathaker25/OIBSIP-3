// Select the form and message element
const loginForm = document.getElementById('loginForm');
const message = document.getElementById('message');

// Hardcoded credentials (for demo purposes)
const validUsername = "user";
const validPassword = "password123";

// Add form submit event
loginForm.addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent page reload
  
  // Get the input values
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  // Check credentials
  if (username === validUsername && password === validPassword) {
    message.style.color = "green";
    message.textContent = "Login successful! Redirecting...";
    setTimeout(() => {
      window.location.href = "homepage.html"; // Redirect to homepage (create later)
    }, 1500);
  } else {
    message.textContent = "Invalid username or password. Try again!";
  }
});
