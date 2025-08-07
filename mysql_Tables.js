var mysql = require('mysql2')

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "Test123",
    database: "nodedb"
})

con.connect(function (err){
    if(err){
        throw err
        console.log("Error Connecting to Database")
    }
    
})