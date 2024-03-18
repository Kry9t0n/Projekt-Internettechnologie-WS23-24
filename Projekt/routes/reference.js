const express = require("express");
const router = express.Router();
const db = require("../db_config.js");

router.get("/",(req,res) => {
    res.render('reference.ejs');
});

module.exports= router;