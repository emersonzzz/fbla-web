const users = [
    {
        email: 'student@jobify.com',   // MAIN KEY
        password: 'student1234',       // NEEDS TO BE HASHED
        first: 'Emerson',              // FIRST NAME
        middle: 'K',                   // MIDDLE INITIAL
        last: 'Reinhard',              // LAST NAME
        birthday: 703788000,           // SAVED AS UNIX TIMESTAMP
        type: 0,                       // STUDENT
        admin: false,                  // NOT ADMIN
        verified: false                // EMAIL HAS NOT BEEN VERIFIED
    },
    {
        email: 'employer@jobify.com',  // MAIN KEY
        password: 'employer5678',      // NEEDS TO BE HASHED
        first: 'Walmart',              // FIRST NAME
        middle: '',                    // MIDDLE INITIAL
        last: 'Fulton',                      // LAST NAME
        birthday: 484473600,           // SAVED AS UNIX TIMESTAMP
        type: 1,                       // EMPLOYER
        admin: false,                  // NOT ADMIN
        verified: true                 // EMAIL HAS BEEN VERIFIED
    },
    {
        email: 'counselor@jobify.com', // MAIN KEY
        password: 'counselor90',       // NEEDS TO BE HASHED
        first: 'Marena',               // FIRST NAME
        middle: '',                    // MIDDLE INITIAL (OPTIONAL)
        last: 'Crawford',              // LAST NAME
        birthday: 315532800,           // SAVED AS UNIX TIMESTAMP
        type: 2,                       // COUNSELOR
        admin: true,                   // IS ADMIN
        verified: true                 // EMAIL HAS BEEN VERIFIED
    }
]

window.onload = function() {
    const loggedInUser = localStorage.getItem('email')
    const loggedInPassword = localStorage.getItem('password')
    if (loggedInUser && (users.find(u => u.email === loggedInUser).password == loggedInPassword)) {
        navbarShowProfile(loggedInUser)
    } else {
        navbarShowLogin()
    }
}

function navbarShowLogin() {
    document.getElementById('right-items').style.display = 'flex'
    document.getElementById('user-profile').style.display = 'none'
}

function navbarShowProfile(email) {
    const user = users.find(u => u.email === email)
    document.getElementById('right-items').style.display = 'none'
    document.getElementById('user-profile').style.display = 'flex'
    document.getElementById('user-name').textContent = `${user.first} ${Array.from(user.last)[0]}.`
}

function handleLogin(event) {
    event.preventDefault()
    console.log('handleLogin')

    const email = document.getElementById('login-email').value
    const password = document.getElementById('login-password').value
    const errorMsg = document.getElementById('login-error')

    const user = users.find(u => u.email === email)

    if (!user) {
        errorMsg.textContent = "Invalid credentials"
        return
    }

    if (user.password !== password) {
        errorMsg.textContent = "Invalid credentials"
        return
    }

    localStorage.setItem('email', email);
    localStorage.setItem('password', user.password)

    navbarShowProfile(email);

    window.location.href = "index.html"
}

function logout() {
    localStorage.removeItem('email')
    localStorage.removeItem('password')
    window.location.href = 'index.html'
}

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

function securityCheck() {
    const accountType = getUserAccountType();
    const consoleContent = document.getElementById("hero-section")

    if (accountType !== 2) {
        consoleContent.style.filter = "blur(10px)";
        const lockMessage = document.createElement("p")
        lockMessage.style.textAlign = "center"
        lockMessage.style.fontSize = "24px"
        lockMessage.innerText = "🔒 This console is for counselors only."
        consoleContent.appendChild(lockMessage)
    }
}

function getUserAccountType() {
    const loggedInUser = localStorage.getItem('email')
    const user = users.find(u => u.email === loggedInUser)
    return user.type
}

document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('login-button').addEventListener('click', function() {
        window.location.href = 'portal.html';
    })
})

document.getElementById('login-form').addEventListener('submit', handleLogin)