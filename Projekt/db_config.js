const mysql = require("mysql");



/*
Konifguration der Datenbank 
Wichtig! @database muss der name der Datenbank stehen
*/
const connection = mysql.createConnection({
        host: "localhost",
        user: "root",
        password: null,
        database: "projekt_it"
});


/*
Verbindung zur Datenbank wird erstellt
*/
connection.connect(function(error){
    if(error){
        console.log("Error:")
        console.log(error)
    } else{
        console.log("connceted to database")
    }
    
})

module.exports = connection;
