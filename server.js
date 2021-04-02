const http = require('http');
const showdown = require('showdown')
const converter = new showdown.Converter()
const fs = require('fs');

const port = process.env.PORT || 1234;

const requestListener = function (req, res) {
    res.writeHead(200);
    const content = fs.readFileSync('./web.md', "utf8");
    res.end(converter.makeHtml(content));
}

const server = http.createServer(requestListener);
server.listen(port);