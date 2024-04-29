function signUp() {
    var username = document.getElementById('signup-username').value;
    var password = document.getElementById('signup-password').value;

    // Store username and password in localStorage
    localStorage.setItem('username', username);
    localStorage.setItem('password', password);

    alert('Sign up successful!');
}

// Function to handle sign in
function signIn() {
    var username = document.getElementById('signin-username').value;
    var password = document.getElementById('signin-password').value;

    // Retrieve stored username and password from localStorage
    var storedUsername = localStorage.getItem('username');
    var storedPassword = localStorage.getItem('password');

    // Check if input matches stored credentials
    if (username === storedUsername && password === storedPassword) {
        alert('Sign in successful!');
    } else {
        alert('Invalid username or password!');
    }
}

// Add event listeners to forms
document.getElementById('signup-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission
    signUp(); // Call sign up function
});

document.getElementById('signin-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission
    signIn(); // Call sign in function
});