const express = require("express");
const router = express.Router();
const db = require("../db_config.js");
const upload = require('../multer_config');

/*
* Route die ausgeführt wird wenn ein Bild hochgelden wird
* Die middelware Multer wird verwendet um die Bilder zuspeichern
*/
router.post("/", upload.single('upload_image'), (req, res) => {
  const filename = req.file.filename;
  const path = req.file.path;

  // Bild wird in die Datenbank eingetragen 
  const insertQuery = "INSERT INTO images (filename, path, idUser) VALUES (?, ?,?)";
  db.query(insertQuery, [filename, path, req.session.userID], (err, result) => {
    if (err) throw err;
    console.log("Bild in die Datenbank eingefügt.");
    res.redirect('/benutzerHome');
  });

})





module.exports = router;