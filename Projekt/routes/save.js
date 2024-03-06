const express = require("express");
const router = express.Router();
const fs = require("fs");
const db = require("../db_config.js");

router.post("/", (req, res) => {
    //umbennnen der Datei
    var currentPath = req.body.imagePath;

    if(currentPath.includes("Entwurf")){
      var newImgName = Math.floor((Math.random() * 10000000000000) + 1000000000000);
      var newPath = currentPath.replace(/[^\\/]+(?=\.\w+$)/, newImgName.toString());
      try {
          fs.renameSync(currentPath, newPath);
      } catch (error) {
          
      }

      var filename = newPath.match(/[^\\\/]+$/)[0]; 

      //Pfad in DB speichern
      const insertQuery = "INSERT INTO images (filename, path, idUser) VALUES (?, ?,?)";
      db.query(insertQuery, [filename, newPath, req.session.userID], (err, result) => {
        if (err) throw err;
        console.log("Bild in die Datenbank eingefügt.");
        res.redirect('/benutzerHome');
      });
    }else{
      res.render("edit.ejs", {path: currentPath}); //einfach wieder zurueck schicken
    }

    


})

module.exports = router;
