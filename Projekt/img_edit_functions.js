const jimp = require("jimp")


function createImgSavingPath(imgPath){
    const seperatedFilenameAndExtension = imgPath.split(/\.(?=[^\.]+$)/);
    const filename = seperatedFilenameAndExtension[0];
    const extension = seperatedFilenameAndExtension[1];

    //neuen Pfad zusammenbauen
    var newPath;


    if(filename.includes("Entwurf")){
        newPath = imgPath;
    }else{
        newPath = filename + "Entwurf." + extension;
    }

    return newPath;
}

function sepiaFilter(imgPath){
    console.log("Processing Sepiafilter...");

    return new Promise((resolve, reject) => {
        jimp.read(imgPath)
            .then(img => {
                console.log("Filtered Image ready...");

                const newPath = createImgSavingPath(imgPath);

                //Bild bearbeiten und speichern
                img.sepia().write(newPath);

                resolve(newPath);
            })
            .catch(err => {
                console.log(err);
                reject()
            })
    });    
}

function grauFilter(imgPath){
    console.log("Processing Graufilter...");

    return new Promise((resolve, reject) => {
        jimp.read(imgPath)
            .then(img => {
                console.log("Filtered Image ready...");

                const newPath = createImgSavingPath(imgPath);

                //Bild bearbeiten und speichern
                img.greyscale().write(newPath);

                resolve(newPath);
            })
            .catch(err => {
                console.log(err);
                reject()
            })
    }); 
}

function farbinterungsFilter(imgPath){
    console.log("Processing Farbinvertierung...");

    return new Promise((resolve, reject) => {
        jimp.read(imgPath)
            .then(img => {
                console.log("Filtered Image ready...");

                const newPath = createImgSavingPath(imgPath);

                //Bild bearbeiten und speichern
                img.invert().write(newPath);

                resolve(newPath);
            })
            .catch(err => {
                console.log(err);
                reject()
            })
    }); 
}

module.exports = {
    sepiaFilter: sepiaFilter,
    grauFilter: grauFilter,
    farbinterungsFilter: farbinterungsFilter
};