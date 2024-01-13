const express = require("express");
const router = express.Router();
const UserInfo = require('../userInfo.js');
const db = require("../db_config.js");
const path = require("path");

router.get("/",(req,res) => {
    res.render("login.ejs");

})

router.post("/", async (req,res) => {
    console.log("test");
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
            return res.status(500).send("Fehler bei der Überprüfung der Email");
        }

        if (emailResult.length === 0) {
            // Benutzername existiert nicht
            return res.status(404).send("Email nicht gefunden");
        }
        // Benutzer Anmelden
        db.query(checkLogin, checkLoginValues, (err, result) => {
            if (err) {
                console.error("Fehler bei der Überprüfung der Login-Daten: " + err.message);
                return res.status(500).send("Fehler bei der Überprüfung der Login-Daten");
            }

            if (result.length > 0) {
                // Email und Passwort sind richtig
                UserInfo.userID = result[0].userId;
                UserInfo.benutzername = result[0].benutzername;
                console.log(UserInfo);
                res.redirect('/');
            } else {
                // Email oder Passwort sind falsch
                res.status(401).send("Ungültige Anmeldeinformationen");
            }
        });
    });

})

module.exports= router;

