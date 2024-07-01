const articles = [
    
    {
        id: 1,
        titular: "Artículo 1"
        contenido: "Contenido del artículo 1."
    },
    {
        id: 2,
        titular: "Artículo 2",
        contenido: "Contenido del artículo 2."
    },
    {
        id: 3,
        titular: "Artículo 3",
        contenido: "Contenido del artículo 3."
    },
    {
        id: 4,
        titular: "Artículo 4",
        contenido: "Contenido del artículo 4."
    },
    {
        id: 5,
        titular: "Artículo 5",
        contenido: "Contenido del artículo 5."
    }
];

console.log(articles);

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