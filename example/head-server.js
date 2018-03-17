const http = require('http');
const url = require('url');
const fs = require('fs');
const path = require('path');
const port = process.argv[2] || 3000;

http.createServer(function (req, res) {
  console.log(`${req.method} ${req.url}`);

  // read file from file system
  fs.readFile('index.html', function(err, data){
    if(err){
      res.statusCode = 500;
      res.end(`Error getting the file: ${err}.`);
    } else {
      // if the file is found, set Content-type and send data
      res.setHeader('Access-Control-Allow-Origin', '*');
      res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
      res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
      res.setHeader('Content-type', 'text/html' );
      res.end(data);
    }
  });


}).listen(parseInt(port));

console.log(`Server listening on port ${port}`);
