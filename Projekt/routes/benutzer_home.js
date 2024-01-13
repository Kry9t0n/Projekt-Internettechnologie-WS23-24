const express = require("express");
const router = express.Router();
const UserInfo = require('../userInfo.js');
const db = require("../db_config.js");

router.get("/",(req,res) => {
    

    res.render('benutzer_home.ejs'); 
 
    

})






module.exports= router;