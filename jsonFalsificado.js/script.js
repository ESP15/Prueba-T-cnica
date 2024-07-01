const articlesContainer = document.getElementById('articles-container');

articles.forEach(article => {

    const articleElement = document.createElement('article');

    const titleElement = document.createElement('h2');
    titleElement.textContent = article.titular;
    articleElement.appendChild(titleElement);

    const contentElement = document.createElement('p');
    contentElement.textContent = article.contenido;
    articleElement.appendChild(contentElement);


    articlesContainer.appendChild(articleElement);
});