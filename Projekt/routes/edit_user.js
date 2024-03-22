const express = require("express");
const router = express.Router();
const db = require("../db_config.js");
const path = require("path");

/*
* Route für das Bearbeiten/ändern der Userdaten
*/
router.post("/", async (req, res) => {
    const editData = {
        vorname: req.body.vorname,
        nachname: req.body.nachname,
        benutzername: req.body.benutzername,
        email: req.body.email,
        password: req.body.password

    }

    const insertQuery = "UPDATE users SET vorname = ?, nachname = ?, benutzername = ?, email = ?, password = ? WHERE userId = ?";
    const insertValues = [editData.vorname, editData.nachname, editData.benutzername, editData.email, editData.password, req.session.userID];

    const checkEmail = "SELECT COUNT(*) as countResult, userId from users where email = ?";
    const checkValues = [editData.email];


    //Überprüfung ob die Email schon existiert 
    db.query(checkEmail, checkValues, (err, result) => {
        if (err) {
            console.error("Fehler beim Überprüfen der Email: " + err.message);
            return res.redirect("/profil?message=Fehler%20beim%20Überprüfen%20der%20Email");
        }
        
        if (result[0].countResult > 0  && result[0].userId !== req.session.userID) {
            //Email existiert bereits
            return res.redirect("/profil?message=Die%20Email%20ist%20bereits%20vorhanden");
        }

        //Ändern der Userdaten
        db.query(insertQuery, insertValues, (err, result) => {
            if (err) {
                console.error("Fehler beim Einfügen der Daten: " + err.message);
                return res.redirect("/profil?message=Fehler%20beim%20ändern%20der%20Daten");
            } else {
                // Erfolgreich änderung  der Userdaten
                console.log("Userdaten erfolgreich verändert");
                return res.redirect('/profil');
            }
        });
    });
});


module.exports = router;