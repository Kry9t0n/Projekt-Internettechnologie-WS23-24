const express = require("express");
const router = express.Router();
const db = require("../db_config.js");


/*
* Benutzer Home Seite
* Nach abruf der Seite werden die Bilder vom User aus der Datenbank entnommen und 
* werden der Html Seite als "images" mitgeschickt die gerendert wird
*/
router.get("/", (req, res) => {
  if (req.session && req.session.user) {
    
    const selectQuery = 'SELECT * FROM images WHERE idUser = ?';
    
    db.query(selectQuery, [req.session.userID], (err, result) => {
      if (err) {
        console.error('Fehler beim Abrufen der Bilder aus der Datenbank:', err);
        return;
      }
      res.render('benutzer_home.ejs', { images: result });
    });
 
  } else {
    res.redirect('/');
  }
})

module.exports = router;