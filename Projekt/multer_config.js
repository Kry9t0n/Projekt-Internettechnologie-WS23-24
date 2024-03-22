const multer = require('multer');
const path = require('path');
const fs = require('fs');
/*
* Konfiguation von Multer 
* Ist dafür da, dass die Hochgeladenen Bilder in ihren entsprechenden (falls nicht vorhanden wird einer erstellt) Orderner gespeichert werden 
* Der Name der Bilder ist ein zusammensetzung von der aktuellen Zeit ("Date.now()") und der Dateiendung ("path.extname(file.originalname)")
*/
const storage = multer.diskStorage({
    destination: ( req, file ,cb) => {
        const userid = req.session.userID
        const userFolderPath = `images/${userid}/`;
        fs.mkdirSync(userFolderPath, { recursive: true });
        cb(null, userFolderPath)
    },
    filename:(req,file, cb ) => {
        cb(null,Date.now()+ path.extname(file.originalname))
    }
});

const upload = multer({ storage: storage });

module.exports = upload;