console.log("Hello World!!")

var http = require('http') // imports http module
var url = require('url')
var now = new Date()


http.createServer(function (req, res){  
    res.writeHead(200, {'Content-Type': 'text/html'})
    var q = url.parse(req.url, true).query
    var date = q.date
    var month = q.month
    var year = q.year
    var futureDate = new Date(now)
    futureDate.setDate(now.getDate() + 7) // setting future date
    var pastDate = new Date(now)
    pastDate.setDate(now.getDate() - 7) // setting past date
    res.write("Today is: " +date+" "+month+" "+year+ "<br>")
    res.write("</br> But actual system time is: "+now.toLocaleDateString())
    res.write("<br> 7 days from today is: "+futureDate.toLocaleDateString()) 
    res.write("<br> 7 days before today was: "+pastDate.toLocaleDateString()) 
    res.end()
}).listen(8080)