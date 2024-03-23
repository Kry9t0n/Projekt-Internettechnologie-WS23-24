const express = require("express");
const router = express.Router();
const db = require("../db_config.js");
const fs = require('fs');
const path = require('path');


/*
* Route um User Profil zu löschen, mit all seinen Bildern
*/
router.get("/",(req,res) => {
    if (req.session && req.session.user) { 
        
        const deleteQuery = "Delete FROM users where userId = ?";

        //löschen der Userdaten in der Datenbank
        db.query(deleteQuery, req.session.userID, (err, result) => {
            if (err) {
                console.error("Fehler beim löschen des Users: " + err.message);
                return res.redirect("/profil?message=Fehler%20beim%20löschen%20des%20Users");
            }
        });
       
        //löschen der gespeicherten Bilder des Users
        const imagePath = path.resolve("images", `${req.session.userID}`);
        fs.rm(imagePath, { recursive: true, force: true }, (err) => {
            if (err) {
              console.error(err)
              return
            }
        })
        
        //weiterleitung zu "logout" um session zu löschen 
        res.redirect('/logout');
    } else {
        res.render('home.ejs');
    }


})

module.exports= router;