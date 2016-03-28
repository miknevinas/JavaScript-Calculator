var http = require('http');

var server = http.createServer(function(req, res) {
    res.writeHeat(200, {'Content-Type': 'text/html'});
    res.end('');
})

var port = Number(process.env.port || 3000);
server.listen(port);