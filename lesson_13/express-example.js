const express = require("express");

const app = express();

app.get('/', (req, res) => {
    res.send("Express.js\nYou sent:\n" +  JSON.stringify(req.query));
});

app.post('/hello', (req, res) => {
    res.send("Hello, Express!");
});

app.listen(9000)