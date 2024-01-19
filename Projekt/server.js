const express = require("express");
const app = express();
const path = require("path");
const db = require("./db_config.js");
const UserInfo = require('./userInfo.js');
const upload = require('./multer_config');



const loginRoute = require("./routes/login")
const signupRoute = require("./routes/signup")
const benutzerHomeRoute = require("./routes/benutzer_home")
const uploadRoute = require("./routes/upload")
const deleteRoute = require("./routes/delete")
const edit_OberflächeRoute = require("./routes/edit")
const profilRoute = require("./routes/profil")

app.set("view-engine", "ejs")
app.use(express.urlencoded({extended:false}))
//Statischer Pfad um auf die Bilder zuzugreifen 
app.use('/images', express.static(path.join(__dirname, 'images')));
app.use('/js', express.static(path.join(__dirname, 'js')));
app.use('/css', express.static(path.join(__dirname, 'css')));
app.use('/media', express.static(path.join(__dirname, 'media')));

app.use("/login", loginRoute);
app.use("/signup", signupRoute);
app.use("/benutzerHome", benutzerHomeRoute);
app.use("/upload", uploadRoute);
app.use("/delete", deleteRoute);
app.use("/edit", edit_OberflächeRoute);
app.use("/profil", profilRoute);

app.get("/",(req,res) => {
    res.render("home.ejs");

})







app.listen(3000, () => {
    console.log("Server is running")
   
})
