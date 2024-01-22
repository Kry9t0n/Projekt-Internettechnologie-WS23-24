const express = require("express");
const router = express.Router();
const db = require("../db_config.js");

router.get("/",(req,res) => {
    if (req.session && req.session.user) {
        res.render("profil.ejs");
    } else {
        res.render('home.ejs');
    }
})

module.exports= router;