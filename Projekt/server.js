const express = require("express");
const app = express();
const path = require("path");
const db = require("./db_config.js");


//Speichert ID, Name und Password vom angemeldeten User
const UserInfo = {
    userID: undefined,
    benutzername: undefined,
}


app.set("view-engine", "ejs")
app.use(express.urlencoded({extended:false}))

app.get("/",(req,res) => {
    res.render("home.ejs");

})

app.get("/login",(req,res) => {
    res.render("login.ejs");

})

app.post("/login", async (req,res) => {
    console.log("test");
    const loginData = {
        email: req.body.email,
        password: req.body.password
    }
   
    const checkLogin = "SELECT * from users where email = ? and password = ?";
    const checkLoginValues = [loginData.email, loginData.password];

    const checkEmail = "SELECT * from users where email = ?";
    const checkEmailValues = [loginData.email];

    // Überprüfung ob Benutzernamen existiert
    db.query(checkEmail, checkEmailValues, (err, emailResult) => {
        if (err) {
            console.error("Fehler bei der Überprüfung der Email: " + err.message);
            return res.status(500).send("Fehler bei der Überprüfung der Email");
        }

        if (emailResult.length === 0) {
            // Benutzername existiert nicht
            return res.status(404).send("Email nicht gefunden");
        }
        // Benutzer Anmelden
        db.query(checkLogin, checkLoginValues, (err, result) => {
            if (err) {
                console.error("Fehler bei der Überprüfung der Login-Daten: " + err.message);
                return res.status(500).send("Fehler bei der Überprüfung der Login-Daten");
            }

            if (result.length > 0) {
                // Email und Passwort sind richtig
                UserInfo.userID = result[0].userId;
                UserInfo.benutzername = result[0].benutzername;
                console.log(UserInfo);
                res.redirect('/');
            } else {
                // Email oder Passwort sind falsch
                res.status(401).send("Ungültige Anmeldeinformationen");
            }
        });
    });

})



app.get("/signup",(req,res) => {
    res.render("signup.ejs");

})

app.post("/signup", async (req,res) => {
    const signupData = {
        vorname: req.body.vorname,
        nachname: req.body.nachname,
        benutzername: req.body.benutzername,
        email: req.body.email,
        password: req.body.password

    }
    const insertQuery = "INSERT INTO users (vorname, nachname,benutzername,email, password) VALUES (?, ?,?,?,?)";
    const insertValues  = [signupData.vorname, signupData.nachname, signupData.benutzername, signupData.email, signupData.password];

    const checkBenutzer = "SELECT COUNT(*) from users where email = ?";
    const checkValues = [signupData.email];


    //Überprüfung ob der Benutzer schon existiert 
    db.query(checkBenutzer, checkValues, (err, result) => {
        if (err) {
            console.error("Fehler beim Überprüfen des Benutzernamens: " + err.message);
            return res.status(500).send("Fehler beim Überprüfen des Benutzernamens");
        }

        if (result[0]['COUNT(*)'] > 0) {
            // Benutzername existiert bereits
            return res.status(409).send("Die Email wird bereits verwendet");
        }

        // Benutzer registiert   
        db.query(insertQuery, insertValues, (err, result) => {
            if (err) {
                console.error("Fehler beim Einfügen der Daten: " + err.message);
                return res.status(500).send("Fehler beim Einfügen der Daten");
            }
            // Erfolgreich registiert
            console.log("Datensatz eingefügt: " + result.affectedRows + " Zeile(n) betroffen");
            //res.status(200).send("Datensatz eingefügt");
            res.redirect('/login');
        });
    });
    
    
    
    
    
    
   

})


app.listen(3000, () => {
    console.log("Server is running")
   
})
