const http = require('http');
const url = require('url');

const hostname = '127.0.0.1';
const port = 3000;


const server = http.createServer((req, res) => {
  const queryObject = url.parse(req.url,true).query;
  let id = req.headers['Cookie']

  console.log(id);


  res.end('Hola, ' + (id ? id : "desconocido") + "\n\n");
});


server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});