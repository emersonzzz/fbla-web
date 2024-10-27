document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('login-button').addEventListener('click', function() {
        window.location.href = 'pages/login.html';
    })

    document.getElementById('signup-button').addEventListener('click', function() {
        window.location.href = 'pages/signup.html';
    })
})

function filterArticles() {
    console.log('filtering articles')
    const searchQuery = document.getElementById('search-bar').value.toLowerCase();
    const articles = document.querySelectorAll('#article-list .article');

    articles.forEach(article => {
        const articleText = article.textContent.toLowerCase();
        if (articleText.includes(searchQuery)) {
            article.style.display = '';
        } else {
            article.style.display = 'none';
        }
    })
}