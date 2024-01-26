const express = require("express");
const router = express.Router();
const db = require("../db_config.js");

router.get("/",(req,res) => {
    console.log("delete_user test");
    res.redirect('/benutzerHome');
})

module.exports= router;