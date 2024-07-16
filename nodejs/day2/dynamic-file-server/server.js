const http = require('http');
const fs = require('fs');
const path = require('path');

const server = http.createServer((req, res) => {
    const requestedPath = path.join(__dirname, decodeURIComponent(req.url));

    fs.stat(requestedPath, (err, stats) => {
        if (err) {
            res.writeHead(404, { 'Content-Type': 'text/plain' });
            res.end('404 Not Found');
            return;
        }

        if (stats.isDirectory()) {
            fs.readdir(requestedPath, (err, files) => {
                if (err) {
                    res.writeHead(500, { 'Content-Type': 'text/plain' });
                    res.end('Internal Server Error');
                    return;
                }

                let content = '<ul>';
                files.forEach(file => {
                    const filePath = path.join(req.url, file);
                    const icon = fs.statSync(path.join(requestedPath, file)).isDirectory() ? '📁' : '📄';
                    content += `<li><a href="${filePath}">${icon} ${file}</a></li>`;
                });
                content += '</ul>';

                res.writeHead(200, { 'Content-Type': 'text/html' });
                res.end(content);
            });
        } else {
            fs.readFile(requestedPath, (err, data) => {
                if (err) {
                    res.writeHead(500, { 'Content-Type': 'text/plain' });
                    res.end('Internal Server Error');
                    return;
                }

                res.writeHead(200, { 'Content-Type': 'text/plain' });
                res.end(data);
            });
        }
    });
});

const PORT = 3000;
server.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});
