const express = require("express");
const router = express.Router();
const UserInfo = require('../userInfo.js');
const db = require("../db_config.js");

router.post("/",(req,res) => {
    let path = req.body.imagePath;
    res.render("bildbearbeitugsOberflaeche.ejs" , {path: path}); 
})


module.exports= router;