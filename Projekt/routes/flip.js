const express = require("express");
const router = express.Router();
const imgEditFunctions = require("../img_edit_functions.js");

router.post("/", (req, res) => {
    var path = req.body.imagePath;
    var value = req.body.flipDirection;

    imgEditFunctions.flip(path, value)
    .then(imgPath => {
        res.render("edit.ejs", {path: imgPath});
    })
    .catch(err => {
        console.log(err);
        res.status(500).send("Es ist ein Fehler beim Blur-Effekt aufgetreten!");
    })  
})

module.exports = router;