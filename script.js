document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('login-button').addEventListener('click', function() {
        window.location.href = 'portal.html';
    })

    document.getElementById('signup-button').addEventListener('click', function() {
        window.location.href = 'register.html';
    })

    document.getElementById('')
})

function filterArticles() {
    const input = document.getElementById("search-bar").value.toLowerCase();
    const articles = document.querySelectorAll("#articles-list .article");

    articles.forEach(article => {
        const text = article.textContent.toLowerCase();
        if (text.includes(input)) {
            article.style.display = "";
        } else {
            article.style.display = "none";
        }
    });
}

document.addEventListener('DOMContentLoaded', function () {
    // Simulated users (hardcoded for now)
    const users = {
        "counselor@jobify.com": { password: "randolph85*", type: "counselor" },
        "employer@jobify.com": { password: "mcdonaldsfat42!", type: "employer" },
        "student@jobify.com": { password: "thunderbirds79*", type: "student" }
    };

    const loginForm = document.getElementById('login-form');
    if (loginForm) {
        loginForm.addEventListener('submit', function (event) {
            event.preventDefault();

            // Collect the user's input
            const email = document.getElementById('login-email').value;
            const password = document.getElementById('login-password').value;

            // Check if the email exists and the password matches
            if (users[email] && users[email].password === password) {
                const userType = users[email].type;
                alert('Login successful!');

                // Redirect user based on their role
                if (userType === "counselor") {
                    window.location.href = "console.html"; // Redirect to counselor's portal
                } else if (userType === "employer") {
                    window.location.href = "index.html"; // Redirect to employer's portal
                } else if (userType === "student") {
                    window.location.href = "portfolio.html"; // Redirect to student's portal
                }
            } else {
                alert('Invalid email or password!');
            }
        });
    }
});
