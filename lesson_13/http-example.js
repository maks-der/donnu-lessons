const http = require("http");
const url = require("url");

const server = http.createServer((req, res) => {
    res.setHeader("Access-Control-Allow-Origin", "*")

    const parsed = url.parse(req.url, true)
    const reqUrl = parsed.pathname

    if (req.method == "GET") {
        if (reqUrl == "/") {
            res.write("Http Module\nYou sent:\n" +  JSON.stringify(parsed.query))
            res.end()
        }
    } else if (req.method == "POST") {
        if (reqUrl == "/hello") {
            res.write("Hello Http Module!")
            res.end()
        }
    }
})

server.listen(9000)