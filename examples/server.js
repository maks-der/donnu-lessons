const express = require('express');

const app = express();

app.use('/', express.static('public'));

app.get('/data', (req, res) => {
    res.json({ message: "Hello Server!" })
});

// Default: localhost (127.0.0.1)
app.listen(3000, () => {
    console.log("Server started");
});