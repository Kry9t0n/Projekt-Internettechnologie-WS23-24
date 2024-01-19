const express = require("express");
const router = express.Router();
const UserInfo = require('../userInfo.js');
const db = require("../db_config.js");

router.get("/",(req,res) => {
    logoutUser();
    res.redirect("/");

})

function logoutUser() {
    console.log('Abgemeldeter Benutzer:', UserInfo.benutzername);
    UserInfo.userID = undefined;
    UserInfo.benutzername = undefined;
}

module.exports = router;