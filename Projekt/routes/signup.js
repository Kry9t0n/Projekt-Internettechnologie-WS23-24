const express = require("express");
const router = express.Router();
const db = require("../db_config.js");
const path = require("path");

router.get("/",(req,res) => {
    res.render("signup.ejs");

})

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

    const checkBenutzer = "SELECT COUNT(*) from users where email = ?";
    const checkValues = [signupData.email];


    //Überprüfung ob der Benutzer schon existiert 
    db.query(checkBenutzer, checkValues, (err, result) => {
        if (err) {
            console.error("Fehler beim Überprüfen des Benutzernamens: " + err.message);
            return res.render("signup.ejs",{ message: "Fehler beim Überprüfen des Benutzernamens"})
            //return res.status(500).send("Fehler beim Überprüfen des Benutzernamens");
        }

        if (result[0]['COUNT(*)'] > 0) {
            // Benutzername existiert bereits
            return res.render("signup.ejs",{ message: "Die Email wird bereits verwendet"})
            //return res.status(409).send("Die Email wird bereits verwendet");
        }

        // Benutzer registiert   
        db.query(insertQuery, insertValues, (err, result) => {
            if (err) {
                console.error("Fehler beim Einfügen der Daten: " + err.message);
                return res.render("signup.ejs",{ message: "Fehler beim Einfügen der Daten"})
                //return res.status(500).send("Fehler beim Einfügen der Daten");
            }
            // Erfolgreich registiert
            console.log("Datensatz eingefügt: " + result.affectedRows + " Zeile(n) betroffen");
            //res.status(200).send("Datensatz eingefügt");
            res.redirect('/login');
        });
    });
    
    
   

})

module.exports= router;