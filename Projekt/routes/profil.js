const express = require("express");
const router = express.Router();
const db = require("../db_config.js");

router.get("/",(req,res) => {
    if (req.session && req.session.user) {
        const selectQuery = 'SELECT * FROM users WHERE userId = ?';
        db.query(selectQuery, [req.session.userID], (err, result) => {
            if (err) {
                console.error('Fehler beim Abrufen der Userdaten aus der Datenbank:', err);
                return;
            }
        res.render("profil.ejs", {userdaten: result[0]});
    });
    } else {
        res.render('home.ejs');
    }
})

module.exports= router;

