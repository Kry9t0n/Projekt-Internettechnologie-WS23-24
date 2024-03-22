const multer = require('multer');
const path = require('path');
const fs = require('fs');
/*
Konfiguation von Multer 
Ist dafür da, dass die Hochgeladenen Bilder in ihren entsprechenden Orderner gespeichert werden 
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