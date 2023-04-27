import express from "express";
import { readFileSync } from "fs";
import { resolve } from "path";

const app = express();
const delay = 3000;

app.use(express.static("./public"));

app.get("/user", (req, res) => {
    console.log("GET: user");

    setTimeout(() => {
        const userData = {
            firstName: "Alex",
            lastName: "Freeman",
            age: 32,
        }
        res.send(userData);
    }, delay);
});

app.get("/article", (req, res) => {
    console.log("GET: article");

    setTimeout(() => {
        const article = readFileSync(resolve("./data/article.json"), 'utf-8');
        res.send(article);
    }, delay);
});

app.get("/news", (req, res) => {
    console.log("GET: news");
    setTimeout(() => {
        const article = readFileSync(resolve("./data/news.json"), 'utf-8');
        res.send(article);
    }, delay);
})

app.listen(3000, () => {
    console.log("Server started");
});