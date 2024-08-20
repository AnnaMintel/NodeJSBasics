const http = require('http');
const fs = require('fs');

const PORT = 3001;
const HOST = 'localhost';

const server = http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'text/html; charset=utf8'});

    if(req.url == '/')
        fs.createReadStream('./templates/index.html').pipe(res);
    else if(req.url == '/about')
        fs.createReadStream('./templates/about.html').pipe(res);
    else
    fs.createReadStream('./templates/error.html').pipe(res);
    
});

server.listen(PORT, HOST, () => {
    console.log(`Server is launched: http://${HOST}:${PORT}`)
});