const express = require("express");
const router = express.Router();
const db = require("../db_config.js");

router.get("/",(req,res) => {
    req.session.destroy((err) => {
        if (err) {
            console.error('Fehler beim Abmelden:', err);
        } else {
            res.redirect('/');
        }
    });
});


module.exports = router;