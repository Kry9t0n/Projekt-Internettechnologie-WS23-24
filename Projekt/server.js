const express = require("express");
const app = express();
const path = require("path");
const db = require("./db_config.js");
const UserInfo = require('./userInfo.js');

const loginRoute = require("./routes/login")
const signupRoute = require("./routes/signup")

app.set("view-engine", "ejs")
app.use(express.urlencoded({extended:false}))


app.use("/login", loginRoute);
app.use("/signup", signupRoute);




app.get("/",(req,res) => {
    res.render("home.ejs");

})







app.listen(3000, () => {
    console.log("Server is running")
   
})
