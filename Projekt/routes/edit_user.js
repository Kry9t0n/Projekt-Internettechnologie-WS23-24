const express = require("express");
const router = express.Router();
const db = require("../db_config.js");
const path = require("path");


router.post("/", async (req, res) => {
    const editData = {
        vorname: req.body.vorname,
        nachname: req.body.nachname,
        benutzername: req.body.benutzername,
        email: req.body.email,
        password: req.body.password

    }

    console.log("Test: edit_user")

    const insertQuery = "UPDATE users SET vorname = ?, nachname = ?, benutzername = ?, email = ?, password = ? WHERE userId = ?";
    const insertValues = [editData.vorname, editData.nachname, editData.benutzername, editData.email, editData.password, req.session.userID];

    const checkEmail = "SELECT COUNT(*) as countResult, userId from users where email = ?";
    const checkValues = [editData.email];


    //Überprüfung ob der Benutzer schon existiert 
    db.query(checkEmail, checkValues, (err, result) => {
        if (err) {
            console.error("Fehler beim Überprüfen des Benutzernamens: " + err.message);
            //return res.render("profil.ejs",{ message: "Fehler beim Überprüfen des Benutzernamens"})
            return res.status(500).send("Fehler beim Überprüfen des Benutzernamens");
        }

        if (result[0].countResult > 0  && result[0].userId !== req.session.userID) {
            console.log(result[0].countResult)
            console.log(result[0].userId)
            console.log(req.session.userID)
            // Benutzername existiert bereits
            //return res.render("profil.ejs",{ message: "Die Email wird bereits vorhanden"})
            return res.status(409).send("Die Email wird bereits verwendet");
        }



        db.query(insertQuery, insertValues, (err, result) => {
            if (err) {
                console.error("Fehler beim Einfügen der Daten: " + err.message);
                res.status(500).send("Fehler beim Einfügen der Daten");
            } else {
                // Erfolgreich Update
                console.log("Datensatz eingefügt: " + result.affectedRows + " Zeile(n) betroffen");
                res.redirect('/profil');
            }
        });
    });
});


module.exports = router;