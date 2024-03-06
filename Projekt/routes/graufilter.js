const express = require("express");
const router = express.Router();
const imgEditFunctions = require("../img_edit_functions.js");

router.post("/", (req, res) => {
    console.log("Request Graufilter");
    var path = req.body.imagePath;
    imgEditFunctions.grauFilter(path)
    .then(greyImgPath => {
        res.render("edit.ejs", {path: greyImgPath});
    })
    .catch(err => {
        console.log(err);
        res.status(500).send("Es ist ein Fehler beim Graufilter aufgetreten!");
    })  
})

module.exports = router;