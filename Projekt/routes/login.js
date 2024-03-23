const express = require("express");
const router = express.Router();
const db = require("../db_config.js");


/*
* Login-Page
*/
router.get("/", (req, res) => {
    if (req.session && req.session.user) {
        res.redirect('/benutzerHome');
    } else {
        res.render("login.ejs");
    }
})


/*
* Login Vorgang 
* Wenn Login Erfolgreich, weiterleitung zur BenutzerHome-Page
*/
router.post("/", async (req, res) => {
    const loginData = {
        email: req.body.email,
        password: req.body.password
    }

    const checkLogin = "SELECT * from users where email = ? and password = ?";
    const checkLoginValues = [loginData.email, loginData.password];

    const checkEmail = "SELECT * from users where email = ?";
    const checkEmailValues = [loginData.email];

    // Überprüfung ob Email existiert
    db.query(checkEmail, checkEmailValues, (err, emailResult) => {
        if (err) {
            console.error("Fehler bei der Überprüfung der Email: " + err.message);
            return res.render("login.ejs", { message: "Fehler bei der Überprüfung der Email" })
        }

        if (emailResult.length === 0) {
            // Email existiert nicht
            return res.render("login.ejs", { message: "Email nicht gefunden" })
        }
        
        // Benutzer Anmelden
        db.query(checkLogin, checkLoginValues, (err, result) => {
            if (err) {
                console.error("Fehler bei der Überprüfung der Login-Daten: " + err.message);
                return res.render("login.ejs", { message: "Fehler bei der Überprüfung der Login-Daten" })
            }

            if (result.length > 0) {
                // Email und Passwort sind richtig
                console.log('Benutzer Angemeldet:', result[0].benutzername + "  ID: " + result[0].userId);



                // Session werte (userid und benutzername) einsetzen 
                req.session.userID = result[0].userId;
                req.session.user = result[0].benutzername;


                // Weiterleitung zur BenuzerHome-Page
                res.redirect('/benutzerHome');
            } else {
                // Email oder Passwort sind falsch
                return res.render("login.ejs", { message: "Ungültige Anmeldeinformationen" })
            }
        });
    });

})

module.exports = router;

