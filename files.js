var http = require('http') // imports http module
var file = require('fs') // imports file module 
var url = require('url')

http.createServer(function (req, res){  
    file.readFile('index.html',function (err, data){
        res.writeHead(200, {'content-type': 'text/html'})
        res.write(data)
        console.log("Incoming Request From: "+ req.url)
        res.end()
    })
}).listen(8080)