const http = require('http');
const fs = require('fs');
const url = require('url');
const querystring = require('querystring');
const port = 8080;

const server = http.createServer((req, res) => {
    const parsedUrl = url.parse(req.url, true);
    
    if (req.method === 'GET' && parsedUrl.pathname === '/signup') {
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.end(`
            <html>
            <head>
                <title>Signup</title>
            </head>
            <body>
                <form action="/signup" method="POST">
                    <label>Username: <input type="text" name="username" required></label><br>
                    <label>Password: <input type="password" name="password" required></label><br>
                    <button type="submit">Signup</button>
                </form>
            </body>
            </html>
        `);
    } else if (req.method === 'POST' && parsedUrl.pathname === '/signup') {
        let body = '';
        req.on('data', chunk => {
            body += chunk.toString();
        });
        req.on('end', () => {
            const user = querystring.parse(body);
            fs.appendFile('user.txt', `${user.username}: ${user.password}\n`, err => {
                if (err) {
                    res.writeHead(500, {'Content-Type': 'text/plain'});
                    res.end('500 Internal Server Error');
                } else {
                    res.writeHead(200, {'Content-Type': 'text/plain'});
                    res.end('Thank You for Signup...!!!');
                }
            });
        });
    } else if (req.method === 'GET' && parsedUrl.pathname === '/allusers') {
        fs.readFile('user.txt', 'utf8', (err, data) => {
            if (err) {
                res.writeHead(500, {'Content-Type': 'text/plain'});
                res.end('500 Internal Server Error');
            } else {
                const users = data.split('\n').map(line => line.split(':')[0]).filter(Boolean).join('<br>');
                res.writeHead(200, {'Content-Type': 'text/html'});
                res.end(`<h3>All Users</h3><p>${users}</p>`);
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
