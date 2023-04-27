(() => {
    function renderUserData(user) {
        const el = document.getElementById("user");

        el.innerHTML = `<div>Hello, ${user.firstName} ${user.lastName}! News for you: </div>`;
    }

    function renderNews(news) {
        const el = document.getElementById("news");
        el.innerHTML = "";
        news.forEach((item) => {
            el.innerHTML += `<div class="news">
                <img src="${item.image}"/>
                <h3 class="title">${item.title}</h3>
                <p class="date">${item.date}</p>
                <p class="description">${item.description}</p>
            </div>`
        });
    }

    function renderArticle(article) {
        const el = document.getElementById("article");
        el.innerHTML = "";

        el.innerHTML += `<img src="${article.image}"/>
                <h1 class="title">${article.title}</h3>
                <p class="date">${article.date}</p>
                <p class="description">${article.description}</p>
                <p class="text">${article.article}</p>`
    }

    function getRequest(path = "") {
        return fetch(`http://localhost:3000/${path}`)
            .then((res) => res.json())
            .then((data) => data);
    }

    async function main() {
        /* ----- async / await ----- */
        // const user = await getRequest("user");
        // renderUserData(user);
        // console.log(user);

        // const news = await getRequest("news");
        // renderNews(news)
        // console.log(news);

        // const article = await getRequest("article");
        // renderArticle(article)
        // console.log(article);

        /* ----- Promise.all() ----- */
        Promise.all([getRequest("user"), getRequest("news"), getRequest("article")])
            .then((data) => {
                console.log(data);
                renderUserData(data[0]);
                renderNews(data[1]);
                renderArticle(data[2]);
        });
    }

    main();
})();