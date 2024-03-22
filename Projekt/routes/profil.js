const express = require("express");
const router = express.Router();
const db = require("../db_config.js");


/*
* Profil-Page des Users
* Enthält die Inforamtion Vorname, Name,Email Benutzername und Password
* User kann seiner Userdaten verändern 
* User kann sein komplettes Profil löschen (inklusive seiner Bilder)
*/
router.get("/",(req,res) => {
    if (req.session && req.session.user) {
        
        const message = decodeURIComponent(req.query.message || "");
        const selectQuery = 'SELECT * FROM users WHERE userId = ?';
        db.query(selectQuery, [req.session.userID], (err, result) => {
            if (err) {
                console.error('Fehler beim Abrufen der Userdaten aus der Datenbank:', err);
                return;
            }
        res.render("profil.ejs", {userdaten: result[0], message: message});
    });
    } else {
        res.redirect('/');
    }
})

module.exports= router;

