const express = require("express");
const router = express.Router();
const imgEditFunctions = require("../img_edit_functions.js");

router.post("/", (req, res) => {
    console.log("Request Farbinvertierung");
    var path = req.body.imagePath;
    imgEditFunctions.farbinterungsFilter(path)
        .then(invertedImgPath => {
            res.render("edit.ejs", {path: invertedImgPath});
        })
        .catch(err => {
            console.log(err);
            res.status(500).send("Es ist ein Fehler bei der Farbinvertierung aufgetreten!");
        })  
})

module.exports = router;