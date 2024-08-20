const http = require('http');
const PORT = 3000;
const HOST = 'localhost';

const server = http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'text/plain; charset=utf8'});
    res.end('Hello NODE JS');
});

server.listen(PORT, HOST, () => {
    console.log(`Server is launched: http://${HOST}:${PORT}`)
});