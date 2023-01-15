const http = require('http');
const fs = require('fs');

const PORT = process.env.PORT || 3000;

http.createServer((req, res) => {
    switch (req.url) {
        case '/':
            fs.readFile('./src/index.html', (err, data) => {
                if (err) {
                    res.statusCode = 404;
                    res.end('Страница не найдена');
                } else {
                    res.setHeader('Content-Type', 'text/html');
                    res.end(data);
                }
            });
            // fs.createReadStream('./src/index.html').pipe(res);
            // fs.createReadStream('./src/js.js').pipe(res);
            break;
        case '/uploads':
            let nameImg = parseInt(1 + 9999 * Math.random());
            req.pipe(
                fs.createWriteStream(`./uploads/${nameImg}.jpeg`)
            );
            fs.createReadStream('./src/js.js').pipe(res);
            res.end(`./uploads/${nameImg}.jpeg`);
            break;
        case '/src/js.js':
            fs.createReadStream('./src/js.js').pipe(res);
            break;
        default:
            break;
    }
    if (req.url.includes('/uploads/')) {
        console.log(req.url);
        fs.createReadStream('.' + req.url).pipe(res);
    }
}).listen(PORT, '127.0.0.1', () => console.log("Server run"));