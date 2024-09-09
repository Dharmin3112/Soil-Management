// script.js

const loginForm = document.getElementById('login-form');
const registerForm = document.getElementById('register-form');

loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (username === '' || password === '') {
        alert('Please fill in all fields');
        return;
    }

    // Send a POST request to the PHP script to handle login
    fetch('login.php', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ username, password })
    })
        .then((response) => response.json())
        .then((data) => {
            if (data.success) {
                alert('Login successful');
                // Redirect to a protected page
            } else {
                alert('Invalid username or password');
            }
        })
        .catch((error) => console.error(error));
});

