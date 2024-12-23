const http = require('http');
const fs = require('fs');
const port = 8080;

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.writeHead(200, {'Content-Type': 'text/plain'});
        res.end('Welcome to Home Page\nAvailable routes are:\n/ \n/aboutus \n/contactus \n/index');
    } else if (req.url === '/aboutus') {
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.end('<a href="/">Home</a><h3>Welcome to About Page</h3>');
    } else if (req.url === '/contactus') {
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.end('<a href="http://www.masaischool.com">contact us at www.masaischool.com</a>');
    } else if (req.url === '/index') {
        fs.readFile('index.js', (err, data) => {
            if (err) {
                res.writeHead(500, {'Content-Type': 'text/plain'});
                res.end('500 Internal Server Error');
            } else {
                res.writeHead(200, {'Content-Type': 'text/javascript'});
                res.end(data);
            }
        });
    } else {
        res.writeHead(404, {'Content-Type': 'text/plain'});
        res.end('404 Not Found');
    }
});

server.listen(port, () => {
    console.log(`Server is running on port ${port}, visit http://localhost:${port}`);
});
