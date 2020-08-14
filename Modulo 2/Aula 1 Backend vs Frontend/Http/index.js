import http from 'http';
//resquire e response
http
  .createServer((req, res) => {
    if (req.method === 'GET' && req.url === '/teste') {
      res.write('GET /teste executa com sucesso');
    } else {
      res.write('Hello World!');
    }
    res.statusCode = 200;
    res.end();
  })
  .listen(8080);
