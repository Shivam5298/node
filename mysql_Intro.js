var mysql = require('mysql2')

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "Test123",
})

con.connect(function (err){
    if (err){
        console.log("Error Connecting to Database")
        throw err
    }
    else{
        console.log("Connected To Database")
        con.query("CREATE DATABASE nodeDB", function(err, result){
            if(err){
                throw err
            }else{
                console.log("Database Created.")
            }
        })
    }
})