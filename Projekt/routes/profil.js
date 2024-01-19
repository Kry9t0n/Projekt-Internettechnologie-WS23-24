const express = require("express");
const router = express.Router();
const UserInfo = require('../userInfo.js');
const db = require("../db_config.js");

router.get("/",(req,res) => {
    res.render("profil.ejs");

})

module.exports= router;