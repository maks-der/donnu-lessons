function getRequest(path = "") {
    return fetch(`http://localhost:3000/${path}`)
        .then((res) => res.json())
        .then((data) => data);
}

console.log(getRequest("article"));

async function main() {
    /* ----- async / await ----- */
    const user = await getRequest("user");
    console.log(user);
    
    const news = await getRequest("news");
    console.log(news);

    const article = await getRequest("article");
    console.log(article);

    /* ----- Promise.all() ----- */
    // Promise.all([getRequest("user"), getRequest("news"), getRequest("article")])
    //     .then((data) => {
    //         console.log(data);
    //     });
}

main();