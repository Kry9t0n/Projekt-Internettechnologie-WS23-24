const express = require("express");
const router = express.Router();
const imgEditFunctions = require("../img_edit_functions.js");
const db = require("../db_config.js");
const fs = require("fs");


const filename = "sepia_entwurf.png";

router.post("/", (req, res) => {
    console.log("Request Sepiafilter");
    var path = req.body.imagePath;


    imgEditFunctions.sepiaFilter(path)
        .then(imgPath => {
            res.render("edit.ejs", {path: imgPath});
        })
        .catch(err => {
            console.log(err);
            res.status(500).send("Es ist ein Fehler beim Sepiafilter aufgetreten!");
        })  
})

module.exports = router;