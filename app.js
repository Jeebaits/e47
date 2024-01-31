const http = require('http');
const fs = require('fs');
http.createServer(function(req, res){
    fs.readFile('./public/index.html', function(err, data){
        res.writeHead(200, {'Content-Type' : 'text/html'});
        res.write(data);
        return res.end();
    });
}).listen(3000, '127.0.0.1');
console.log("Server listening at port 3000");