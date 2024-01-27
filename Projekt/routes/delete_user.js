const express = require("express");
const router = express.Router();
const db = require("../db_config.js");
const fs = require('fs');
const path = require('path');

const deleteQuery = "Delete FROM users where userId = ?";



router.get("/",(req,res) => {
    if (req.session && req.session.user) {
        console.log("delete_user test");
        
        db.query(deleteQuery, req.session.userID, (err, result) => {
            if (err) {
                console.error("Fehler beim löschen des Users: " + err.message);
                return res.status(500).send("Fehler beim löschen des Users");
            }
        
        
        
        });
        
        const imagePath = path.resolve("images", `${req.session.userID}`);
        fs.rm(imagePath, { recursive: true, force: true }, (err) => {
            if (err) {
              console.error(err)
              return
            }
        })
        res.redirect('/logout');
    } else {
        res.render('home.ejs');
    }


})

module.exports= router;