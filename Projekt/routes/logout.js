const express = require("express");
const router = express.Router();
const db = require("../db_config.js");


/*
* Route um Session zulöschen/ Benutzer abzumelden 
*/
router.get("/",(req,res) => {
    req.session.destroy((err) => {
        if (err) {
            console.error('Fehler beim Abmelden:', err);
            return
        } else {
            console.log("Benutzer erfolgreich Abgemeldet");
            res.redirect('/');
        }
    });
});


module.exports = router;