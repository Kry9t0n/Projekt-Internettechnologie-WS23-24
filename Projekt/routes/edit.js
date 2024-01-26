const express = require("express");
const router = express.Router();
const db = require("../db_config.js");

let path;

router.get("/",(req,res) => {
    if (req.session && req.session.user) {
        res.render("edit.ejs" , {path: path});
    } else {
        res.render('home.ejs');
    }
})

router.post("/",(req,res) => {
    path = req.body.imagePath;
    res.render("edit.ejs" , {path: path}); 
})

module.exports= router;