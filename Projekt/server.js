const express = require("express");
const app = express();
const path = require("path");
const db = require("./db_config.js");


app.set("view-engine", "ejs")
app.use(express.urlencoded({extended:false}))

app.get("/",(req,res) => {
    res.render("home.ejs");

})

app.get("/login",(req,res) => {
    res.render("login.ejs");

})


app.get("/signup",(req,res) => {
    res.render("signup.ejs");

})


app.listen(3000, () => {
    console.log("Server is running")

})
