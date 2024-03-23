const express = require("express");
const router = express.Router();
const db = require("../db_config.js");
const fs = require('fs');


const deleteQuery = "Delete FROM images where path = ?";

/*
* Route um Bilder zulöschen
*/
router.post("/", async (req, res) => {
    let path = req.body.imagePath;
    console.log(path);
    fs.unlink(path, (err) => {
        if (err) {
            console.error(err)
            return
        }
    })
    db.query(deleteQuery, path, (err, result) => {
        if (err) {
            console.error("Fehler beim löschen des Bildes: " + err.message);
            return res.status(500).send("Fehler beim löschen des Bildes");
        }

        console.log("Bild: " + path + " von der gelöscht");
        res.redirect('/benutzerHome');
    });

})





module.exports = router;