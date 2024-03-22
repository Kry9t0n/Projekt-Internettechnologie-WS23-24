const express = require("express");
const router = express.Router();
const db = require("../db_config.js");



/*
* Upload-Page
*/
router.get("/",(req,res) => {
    if (req.session && req.session.user) {
        res.render('uploadPage.ejs');
    } else {
        res.redirect('/');
    }

})

module.exports= router;