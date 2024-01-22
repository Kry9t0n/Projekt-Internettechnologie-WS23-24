const express = require("express");
const router = express.Router();
const UserInfo = require('../userInfo.js');
const db = require("../db_config.js");

router.get("/",(req,res) => {
  if (req.session && req.session.user) {
    const selectQuery = 'SELECT * FROM images WHERE idUser = ?';
    db.query(selectQuery, [UserInfo.userID], (err, result) => {
      if (err) {
        console.error('Fehler beim Abrufen der Bilder aus der Datenbank:', err);
        return;
      }
    res.render('benutzer_home.ejs' , {images: result}); 
    });
  }else{
    res.render('home.ejs');
  }
})

module.exports= router;