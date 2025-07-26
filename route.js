var http = require('http') // imports http module
var file = require('fs') // imports file module 
var url = require('url')
var port = 8080

http.createServer(function (req, res){  
    var route = url.parse(req.url, true).pathname
    console.log(route)
    if(route === '/index.html'){
        file.readFile('index.html',function (err, data){
        res.writeHead(200, {'content-type': 'text/html'})
        res.write(data)
        console.log("Incoming Request From: "+ req.url)
        res.end()
    })
    }
    else if(route === '/about.html'){
        file.readFile('about.html',function (err, data){
        res.writeHead(200, {'content-type': 'text/html'})
        res.write(data)
        console.log("Incoming Request From: "+ req.url)
        res.end()
    })
    }
    else{
        res.writeHead(404, {'content-type': 'text/html'})
        res.end("<h3> ROUTE NOT FOUND</h3>")
    }
    
}).listen(port)

console.log("Server Liistening on port: "+port)