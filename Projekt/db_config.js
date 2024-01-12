const mysql = require("mysql");

const connection = mysql.createConnection({
        host: "localhost",
        user: "root",
        password: null,
        database: "it_projekt"
});

connection.connect(function(error){
    if(error){
        console.log("Error:")
        console.log(error)
    } else{
        console.log("connceted to database")
    }
    
})

module.exports = connection;
