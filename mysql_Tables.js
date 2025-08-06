var mysql = require('mysql2')

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "Test123",
    database: "nodedb"
})