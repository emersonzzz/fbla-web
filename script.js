document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('login-button').addEventListener('click', function() {
        window.location.href = 'pages/login.html';
    })

    document.getElementById('signup-button').addEventListener('click', function() {
        window.location.href = 'pages/signup.html';
    })
})