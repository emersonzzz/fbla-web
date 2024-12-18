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
        verified: false,                // EMAIL HAS NOT BEEN VERIFIED
        icon: 'assets/img/emerson-reinhard.png'
    },
    {
        email: 'employer@jobify.com',  // MAIN KEY
        password: 'employer5678',      // NEEDS TO BE HASHED
        first: 'Marco',                // FIRST NAME
        middle: 'C',                   // MIDDLE INITIAL
        last: 'Bennettini',            // LAST NAME
        birthday: 484473600,           // SAVED AS UNIX TIMESTAMP
        type: 1,                       // EMPLOYER
        admin: false,                  // NOT ADMIN
        verified: true,                 // EMAIL HAS BEEN VERIFIED
        icon: 'assets/img/marco-bennettini.png'
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
        verified: true,                 // EMAIL HAS BEEN VERIFIED
        icon: 'assets/img/mr-randolph.png'
    }
]

const articles = [
    {
        title: 'How to Build Your Resume',
        blurb: 'Learn the essentials of creating a standout resume. From listing your experiences to showcasing your skills, this guide helps you craft a document that reflects your strengths and sets you up for success in your job search.',
        emoji: '📄',
        author: 'Mrs. Crawford',
    },
    {
        title: 'Setting Yourself Apart',
        blurb: 'Discover how to differentiate yourself in a competitive job market. This article explores strategies like developing a unique personal brand, acquiring valuable skills, and demonstrating initiative to make a lasting impression on potential employers.',
        emoji: '🌟',
        author: 'Mrs. Bradshaw',
    },
    {
        title: 'Nailing the Job Interview',
        blurb: 'Master the art of the job interview with practical tips on preparation, body language, and responding to tough questions. This article helps you build confidence and improve your chances of landing your dream job.',
        emoji: '🎤',
        author: 'Bradshaw, Crawford, et al.',
    },
    {
        title: 'The Importance of Networking',
        blurb: 'Networking is more than just making connections—it’s about building meaningful relationships that can open doors to opportunities. Learn how to effectively network both online and offline to expand your career prospects.',
        emoji: '🤝',
        author: 'Jobify Articles',
    },
    {
        title: 'Finding Your Career Path',
        blurb: 'This article offers guidance on how to identify your interests and strengths, helping you navigate your career journey. With advice on exploring industries, internships, and further education, you\'ll be better equipped to choose a path that aligns with your goals.',
        emoji: '🛤️',
        author: 'Jobify Articles',
    },
    {
        title: 'Volunteering: Great Ways to Gain Experience',
        blurb: 'Volunteering can be a powerful way to build your resume, gain hands-on experience, and develop transferable skills. Explore the benefits of volunteering and how it can enhance your career prospects, even if you\'re still in school.',
        emoji: '🤗',
        author: 'Jobify Articles',
    },
    {
        title: 'Balancing School and Work',
        blurb: 'Learn how to successfully juggle the demands of school and work. This article offers time management tips and advice on setting boundaries to ensure that you thrive academically and professionally without burning out.',
        emoji: '⚖️',
        author: 'Jobify Articles',
    },
    {
        title: 'Employer\'s Choice: What They Look For',
        blurb: 'What do employers value most when hiring? This article outlines key qualities and skills employers seek in candidates, from adaptability to communication abilities, helping you tailor your resume and interview responses to meet their expectations.',
        emoji: '🧐',
        author: 'Jobify Articles',
    },
    {
        title: 'Learning From Rejections',
        blurb: 'Rejections are an inevitable part of the job search process, but they can also be valuable learning experiences. Discover how to use feedback and self-reflection to improve your approach and increase your chances of success in future applications.',
        emoji: '💪',
        author: 'Jobify Articles',
    },
    
]

window.onload = function() {
    const loggedInUser = localStorage.getItem('email')
    const loggedInPassword = localStorage.getItem('password')
    if (loggedInUser && (users.find(u => u.email === loggedInUser).password == loggedInPassword)) {
        console.log('showing profile')
        navbarShowProfile(loggedInUser)
        consoleContactButton()
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
    document.getElementById('profile-pic').src = user.icon
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
    const loggedInUser = localStorage.getItem('email')
    const loggedInPassword = localStorage.getItem('password')
    if (loggedInUser && (users.find(u => u.email === loggedInUser).password == loggedInPassword)) {
        console.log('showing profile')
        navbarShowProfile(loggedInUser)
        consoleContactButton()
    } else {
        navbarShowLogin()
    }

    const accountType = getUserAccountType();
    const consoleContent = document.getElementById("root")
    const accessDenied = document.getElementById("forbidden-access")
    const body = accessDenied.parentNode

    if (accountType === 2) {
        accessDenied.remove()
    } else {
        consoleContent.remove()
    }
}

function removeAddListing() {
    const loggedInUser = localStorage.getItem('email')
    const loggedInPassword = localStorage.getItem('password')
    if (loggedInUser && (users.find(u => u.email === loggedInUser).password == loggedInPassword)) {
        console.log('showing profile')
        navbarShowProfile(loggedInUser)
        consoleContactButton()
    } else {
        navbarShowLogin()
    }

    const accountType = getUserAccountType()
    const addListingButton = document.getElementById('add-listing')

    if (!(accountType === 1 || accountType === 2)) {
        addListingButton.remove()
    }
}

function getUserAccountType() {
    const loggedInUser = localStorage.getItem('email')
    const user = users.find(u => u.email === loggedInUser)
    if (!user) {
        return -1
    } else {
        return user.type
    }
}

function consoleContactButton() {
    console.log('console contact checking...')
    const accountType = getUserAccountType();

    if (accountType === 2) {
        console.log('counselor, showing console')
        const ccButton = document.getElementById('contact-console')
        ccButton.textContent = 'Console'
        ccButton.href = 'console.html'
    }
}

function submitTicket(event) {
    event.preventDefault();
    console.log(`SUBMITTED ${event.Array}`)
    document.getElementById("modal-overlay").style.display = "none";
    const ticketInfo = {
        name: document.getElementById("general-support-name").value,
        email: document.getElementById("general-support-email").value,
        subject: document.getElementById("general-support-subject").value,
        message: document.getElementById("general-support-message").value,
    }

    console.log(`Name: ${ticketInfo.name}\nEmail: ${ticketInfo.email}\nSubject: ${ticketInfo.subject}\nMessage: ${ticketInfo.message}`)
}

function openTicket(category) { // GS = 0, AM = 1, MH = 2, RC = 3, TL = 4, FG = 5
    
}

document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('login-button').addEventListener('click', function() {
        window.location.href = 'portal.html';
    })
})

document.getElementById("general-support-submit").addEventListener("click", function() {
    document.getElementById("modal-overlay").style.display = "none"; // Hide modal
});











































// Wait for the DOM to load
document.addEventListener('DOMContentLoaded', () => {
    const mentalHealthButton = document.getElementById('mental-health');
    const mentalHealthModal = document.getElementById('mental-health-support');
    const modalOverlay = document.getElementById('modal-overlay');

    // Event listener to show the modal when the button is clicked
    mentalHealthButton.addEventListener('click', () => {
        console.log('PRESSED BUTTON I THINK')
        mentalHealthModal.classList.remove('hidden'); // Show the modal
        modalOverlay.classList.remove('hidden'); // Show the modal overlay
    });

    // Optional: Close the modal when clicking outside of it
    modalOverlay.addEventListener('click', () => {
        mentalHealthModal.classList.add('hidden'); // Hide the modal
        modalOverlay.classList.add('hidden'); // Hide the overlay
    });
});
