const express = require("express");
const router = express.Router();
const UserInfo = require('../userInfo.js');
const db = require("../db_config.js");

router.get("/",(req,res) => {
    req.session.destroy((err) => {
        if (err) {
            console.error('Fehler beim Abmelden:', err);
        } else {
            logoutUser();
            res.redirect('/');
        }
    });
});

function logoutUser() {
    console.log('Abgemeldeter Benutzer:', UserInfo.benutzername);
    UserInfo.userID = undefined;
    UserInfo.benutzername = undefined;
}

module.exports = router;