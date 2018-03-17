const http = require('http');

const hostid = Math.random();

const hostname = '127.0.0.1';
const port = process.argv[2];

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Content-Type', 'application/json');
  res.end(`{"hostid": "${hostid}", "key": "value"}`);
  console.log(`request`);
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
  console.log(`Host ID: ${hostid}`);
});

