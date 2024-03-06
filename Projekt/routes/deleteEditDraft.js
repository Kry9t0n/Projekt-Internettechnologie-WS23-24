const express = require("express");
const router = express.Router();
const db = require("../db_config.js");
const fs = require("fs");

router.post("/", (req, res) => {
    var path = req.body.imagePath;

    //ueberpruefen dass es sich um einen Entwurf handelt
    // falls Entwurf:
    //      dann loesche und redirect
    // sonst:
    //      nichts tun

    if(path.includes("Entwurf")){
        //loeschen des Bildes aus dem Serververzeichnis
        fs.rm(path, (err) => {
            if(err){
                console.log("Fehler beim Verwerfen des Bildes");
                //redirect zu Fehlerseite???
            }else{
                //redirect zu Edit mit originalBild
                var originalImagePath = path.split("Entwurf").join("");
                res.render("edit.ejs", {path: originalImagePath});
            }
        })
    }else{
        res.render("edit.ejs", {path: path}); //einfach wieder zurueck schicken
    }
})

module.exports = router;