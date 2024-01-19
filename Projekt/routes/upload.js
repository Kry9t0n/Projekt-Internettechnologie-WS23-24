const express = require("express");
const router = express.Router();
const UserInfo = require('../userInfo.js');
const db = require("../db_config.js");
const upload = require('../multer_config');

router.post("/", upload.single('upload_image'), (req,res) => {
    const filename = req.file.filename;
    const path = req.file.path;
    
    // Bild wir in die Datenbank erfasst 
    const insertQuery = "INSERT INTO images (filename, path, idUser) VALUES (?, ?,?)";
    db.query(insertQuery, [filename, path, UserInfo.userID], (err, result) => {
      if (err) throw err;
      console.log("Bild in die Datenbank eingefügt.");
      res.redirect('/benutzerHome');
      //res.status(401).send("Bild erfolgreich hochgeladen und in die Datenbank eingefügt.");
    });

})





module.exports= router;