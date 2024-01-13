const multer = require('multer');
const path = require('path');
const fs = require('fs');
const UserInfo = require('./userInfo.js');

const storage = multer.diskStorage({
    destination: ( req, file ,cb) => {
        const userid = UserInfo.userID
        const userFolderPath = `images/${userid}/`;
        fs.mkdirSync(userFolderPath, { recursive: true });
        cb(null, userFolderPath)
    },
    filename:(req,file, cb ) => {
        console.log(file)
        cb(null,Date.now()+ path.extname(file.originalname))
    }
});

const upload = multer({ storage: storage });

module.exports = upload;