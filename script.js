document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('login-button').addEventListener('click', function() {
        window.location.href = 'portal.html';
    })

    document.getElementById('signup-button').addEventListener('click', function() {
        window.location.href = 'register.html';
    })
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

function checkCredentials() {
    
}