const http = require('http');

const port = 1234;

const requestListener = function (req, res) {
    res.writeHead(200);
    res.end('Hello, World!');
}

const server = http.createServer(requestListener);
server.listen(port);