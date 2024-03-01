const express = require("express");
const router = express.Router();
const db = require("../db_config.js");
const path = require("path");

router.get("/",(req,res) => {
    res.render("profil.ejs");

})

router.post("/", async (req,res) => {
    const signupData = {
        vorname: req.body.vorname,
        nachname: req.body.nachname,
        benutzername: req.body.benutzername,
        email: req.body.email,
        password: req.body.password

    }

    const insertQuery = "UPDATE users SET (vorname, nachname, benutzername, email, password) VALUES (?,?,?,?,?) where userId = " + req.session.userID;
    const insertValues  = [signupData.vorname, signupData.nachname, signupData.benutzername, signupData.email, signupData.password];

    db.query(insertQuery, insertValues, (err, result) => {
        if (err) {
            console.error("Fehler beim Einfügen der Daten: " + err.message);
        }
        // Erfolgreich registiert
        console.log("Datensatz eingefügt: " + result.affectedRows + " Zeile(n) betroffen");
        //res.status(200).send("Datensatz eingefügt");
        res.redirect('/profil');
    });
})

module.exports= router;