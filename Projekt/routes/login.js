const express = require("express");
const router = express.Router();
const db = require("../db_config.js");
const path = require("path");

router.get("/",(req,res) => {
    if (req.session && req.session.user) {
        res.redirect('/benutzerHome');
    } else {
        res.render("login.ejs");
    }
})

router.post("/", async (req,res) => {
    const loginData = {
        email: req.body.email,
        password: req.body.password
    }
   
    const checkLogin = "SELECT * from users where email = ? and password = ?";
    const checkLoginValues = [loginData.email, loginData.password];

    const checkEmail = "SELECT * from users where email = ?";
    const checkEmailValues = [loginData.email];

    // Überprüfung ob Benutzernamen existiert
    db.query(checkEmail, checkEmailValues, (err, emailResult) => {
        if (err) {
            console.error("Fehler bei der Überprüfung der Email: " + err.message);
            res.render("login.ejs",{ message: "Fehler bei der Überprüfung der Email"})
            //return res.status(500).send("Fehler bei der Überprüfung der Email");
        }

        if (emailResult.length === 0) {
            // Benutzername existiert nicht
            res.render("login.ejs",{ message: "Email nicht gefunden"})
            //return res.status(404).send("Email nicht gefunden");
        }
        // Benutzer Anmelden
        db.query(checkLogin, checkLoginValues, (err, result) => {
            if (err) {
                console.error("Fehler bei der Überprüfung der Login-Daten: " + err.message);
                res.render("login.ejs",{ message: "Fehler bei der Überprüfung der Login-Daten"})
                //return res.status(500).send("Fehler bei der Überprüfung der Login-Daten");
            }

            if (result.length > 0) {
                // Email und Passwort sind richtig
                console.log('Angemeldeter Benutzer:', result[0].benutzername +"  ID: " + result[0].userId);
                

                //Express
                req.session.userID = result[0].userId;
                req.session.user = result[0].benutzername;
                

                res.redirect('/benutzerHome');
            } else {
                // Email oder Passwort sind falsch
                res.render("login.ejs",{ message: "Ungültige Anmeldeinformationen"})
                
                //res.status(401).send("Ungültige Anmeldeinformationen");
            }
        });
    });

})

module.exports= router;

