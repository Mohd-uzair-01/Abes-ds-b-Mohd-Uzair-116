const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
  if(req.url === '/'){
    fs.readFile('./index.html', (err, httpContent) => {
      if(err){
        res.statusCode = 500;
        res.end('Internal Server Error');
        return;
      }
      res.setHeader('Content-Type', 'text/html');
      res.end(httpContent);
    });
  }
  else if(req.url === '/style.css'){
    fs.readFile('./style.css', 'utf8', (err, httpContent) => {
      if(err){
        res.statusCode = 500;
        res.end('Internal Server Error');
        return;
      }
      res.setHeader('Content-Type', 'text/css');
      res.end(httpContent);
    });
  }
  else {
    res.statusCode = 404;
    res.end('Not Found');
  }
      });
      const port = 3000;
      server.listen(port, () => {
        console.log(`Server is running on port ${port}`);
      });