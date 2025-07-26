var http = require('http') // imports http module
var file = require('fs') // imports file module 
var url = require('url')
var port = 8080

http.createServer(function (req, res){  
    var route = url.parse(req.url, true).pathname
    var q = url.parse(req.url, true)
    var fileName = "." + q.pathname
    console.log(fileName)
    if(fileName === './'){
        fileName = './index.html';
    }else if(fileName === './index.html' || fileName === './index'){
        fileName = './index.html';
    }else if(fileName === './about.html' || fileName === './about'){
        fileName = './about.html';
    }else{
        fileName = fileName;
    }
    file.readFile(fileName, function(err, data){
        if (err){
            res.writeHead(404, {'content-type': 'text/html'})
            res.write("404 NOT FOUND")    
        }
        else{
            res.writeHead(200, {'content-type': 'text/html'})
            res.end(data)
        }
    })
}).listen(port)

console.log("Server Liistening on port: "+port)