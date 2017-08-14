var http = require('http');
var url  = require('url');
var fs   = require('fs');
var neededstats = [];

server = http.createServer( function(req, res) {
var pathname = url.parse(req.url).pathname;
    console.log("Request for " + pathname + " received.");
    res.writeHead(200, {"Content-Type": "text/plain"});
    res.write("Hello World");
    res.end();
});

port = 3000;
host = '127.0.0.1';
server.listen(port, host);
console.log('Listening at http://' + host + ':' + port);