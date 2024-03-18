const express = require("express");
const session = require("express-session");
const app = express();
const path = require("path");
const db = require("./db_config.js");
const upload = require('./multer_config');

const loginRoute = require("./routes/login")
const signupRoute = require("./routes/signup")
const benutzerHomeRoute = require("./routes/benutzer_home")
const uploadRoute = require("./routes/upload")
const deleteRoute = require("./routes/delete")
const editRoute = require("./routes/edit")
const profilRoute = require("./routes/profil")
const logoutRoute = require("./routes/logout")
const uploadPageRoute = require("./routes/uploadPage")
const delete_userRoute = require("./routes/delete_user")
const edit_userRoute = require("./routes/edit_user")
const referenceRoute = require("./routes/reference")
const documentationRoute = require("./routes/documentation")

const sepiaRoute = require("./routes/sepia.js")
const grauFilterRoute = require("./routes/graufilter.js")
const farbInvertierungsRoute = require("./routes/farbinvertierung.js")
const BildEntwurfSpeichernRoute = require("./routes/save.js")
const BildEntwurfLoeschenRoute = require("./routes/deleteEditDraft.js")

// Konfiguration für express-session
app.use(
    session({
        secret: "geheimnisvollerSchluessel",
        resave: false,
        saveUninitialized: true,
        cookie: {
            secure: false, // Beachte: Bei einer Produktionsanwendung sollte dies auf 'true' gesetzt werden, wenn HTTPS verwendet wird
            maxAge: null, // Session-Cookie wird gelöscht, wenn der Browser geschlossen wird
        },  
    })
);

// Statische Dateien im "views" Verzeichnis bereitstellen
app.use(express.static(path.join(__dirname, "views")));


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
app.use("/edit", editRoute);
app.use("/profil", profilRoute);
app.use("/logout", logoutRoute);
app.use("/uploadPage", uploadPageRoute);
app.use("/deleteUser", delete_userRoute);
app.use("/editUser", edit_userRoute);
app.use("/reference", referenceRoute);
app.use("/documentation", documentationRoute);

app.use("/sepia", sepiaRoute);
app.use("/grau", grauFilterRoute);
app.use("/farbinvertierung", farbInvertierungsRoute);
app.use("/savedraft", BildEntwurfSpeichernRoute);
app.use("/deletedraft", BildEntwurfLoeschenRoute);


app.get("/",(req,res) => {
    if (req.session && req.session.user) {
        res.redirect('/benutzerHome');
    } else {
        res.render('home.ejs');
    }
})

app.listen(3000, () => {
    console.log("Server is running")
   
})