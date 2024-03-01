const express = require("express");
const router = express.Router();
const db = require("../db_config.js");
const path = require("path");

router.get("/",(req,res) => {
    if (req.session && req.session.user) {
        res.render("profil.ejs" , {path: path});
    } else {
        res.render('home.ejs');
    }
})

router.post("/", async (req, res) => {
    const editData = {
        vorname: req.body.editVorname || '',
        nachname: req.body.editNachname || '',
        benutzername: req.body.editBenutzername || '',
        email: req.body.editEmail || '',
        password: req.body.editPasswort || ''

    }

    const insertQuery = "UPDATE users SET vorname = ?, nachname = ?, benutzername = ?, email = ?, password = ? WHERE userId = ?";
    const insertValues = [editData.vorname, editData.nachname, editData.benutzername, editData.email, editData.password, req.session.userID];

    db.query(insertQuery, insertValues, (err, result) => {
        if (err) {
            console.error("Fehler beim Einfügen der Daten: " + err.message);
            res.status(500).send("Fehler beim Einfügen der Daten");
        } else {
            // Erfolgreich registiert
            console.log("Datensatz eingefügt: " + result.affectedRows + " Zeile(n) betroffen");
            res.redirect('/profil');
        }
    });
});

module.exports = router;