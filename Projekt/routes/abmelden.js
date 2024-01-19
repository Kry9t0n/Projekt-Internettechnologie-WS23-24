const express = require("express");
const router = express.Router();
const UserInfo = require('../userInfo.js');
const db = require("../db_config.js");

router.get("/",(req,res) => {
    logoutUser();
    res.render("home.ejs");

})

function logoutUser() {
    console.log('Abgemeldeter Benutzer:', UserInfo.benutzername);
    UserInfo.userID = null;
    UserInfo.benutzername = null;
}

module.exports = router;