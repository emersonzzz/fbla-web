document.addEventListener('DOMContentLoaded', function () {
    // Handle the signup button click
    document.getElementById('signup-button').addEventListener('click', function () {
        window.location.href = 'randolph-is-the-best.html';
    });

    // Handle the registration form submission
    document.getElementById('register-form').addEventListener('submit', function (event) {
        event.preventDefault(); // Prevent default form submission behavior

        // Gather form data
        const formData = new FormData(event.target);
        const data = Object.fromEntries(formData.entries());

        // Send data to the API
        registerUser(data);
    });
});

// Function to send the registration request to the backend
async function registerUser(data) {
    try {
        const response = await fetch('https://fbla-server-1.onrender.com/api/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        });

        if (!response.ok) {
            // If the response is not OK, show the error
            const errorData = await response.json();
            alert(`Error: ${errorData.error || 'Something went wrong'}`);
        } else {
            const responseData = await response.json();
            alert('User registered successfully!');
            console.log(responseData);
            // Optionally, redirect user after successful registration
            window.location.href = 'login.html';  // Redirect to login page after successful registration
        }
    } catch (error) {
        console.error('Error:', error);
        alert('Error connecting to the server.');
    }
}
