const express = require("express");
const router = express.Router();
const db = require("../db_config.js");
const path = require("path");


/*
* Signup-Page
*/
router.get("/",(req,res) => {
    res.render("signup.ejs");

})
/*
* Neuer User erstellen und in Datenbank speichern
* E-Mail-Adressen sind auf unseren Seite einmalig, weshalb vor der der Erstellung des
* User die E-Mail Überprüft wird
*/
router.post("/", async (req,res) => {
    const signupData = {
        vorname: req.body.vorname,
        nachname: req.body.nachname,
        benutzername: req.body.benutzername,
        email: req.body.email,
        password: req.body.password

    }
    
    console.log(signupData);
    
    const insertQuery = "INSERT INTO users (vorname, nachname,benutzername,email, password) VALUES (?, ?,?,?,?)";
    const insertValues  = [signupData.vorname, signupData.nachname, signupData.benutzername, signupData.email, signupData.password];

    const checkEmail = "SELECT COUNT(*) from users where email = ?";
    const checkValues = [signupData.email];


    //Überprüfung ob die Email schon existiert 
    db.query(checkEmail, checkValues, (err, result) => {
        if (err) {
            console.error("Fehler beim Überprüfen Email: " + err.message);
            return res.render("signup.ejs",{ message: "Fehler beim Überprüfen Email"})
        }

        if (result[0]['COUNT(*)'] > 0) {
            //Email existiert bereits
            return res.render("signup.ejs",{ message: "Die Email wird bereits verwendet"})
        }

        // Benutzer registiert   
        db.query(insertQuery, insertValues, (err, result) => {
            if (err) {
                console.error("Fehler beim Einfügen der Daten: " + err.message);
                return res.render("signup.ejs",{ message: "Fehler beim Einfügen der Daten"})
            }
            // Erfolgreich registiert
            console.log("Datensatz eingefügt: " + result + " Zeile(n) betroffen");

            // weiterleitung zu Login-Page
            res.redirect('/login');
        });
    });
    
    
   

})

module.exports= router;