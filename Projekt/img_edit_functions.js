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

function flip(imgPath, value){
    console.log("Processing Bildflip ...");
    return new Promise((resolve, reject) => {
        jimp.read(imgPath)
            .then(img => {
                const newPath = createImgSavingPath(imgPath);
                if(value == "1"){ //hor
                    img.flip(true, false).write(newPath);
                }else if(value == "2"){ //ver
                    img.flip(false, true).write(newPath);
                }else{}
                resolve(newPath);
            })
            .catch(err => {
                console.log(err);
                reject();
            })
    })
}

function rotate(imgPath, degree){
    console.log("Processing Rotation...");
    return new Promise((resolve, reject) => {
        jimp.read(imgPath)
        .then(img => {
            const newPath = createImgSavingPath(imgPath);
            img.rotate(parseInt(degree)).write(newPath);
            resolve(newPath);
        })
        .catch(err => {
            console.log(err);
            reject();
        })
    })
}

function contrast(imgPath, val){
    console.log("Progessing Contrast...");
    return new Promise((resolve, reject) => {
        jimp.read(imgPath)
            .then(img => {
                const newPath = createImgSavingPath(imgPath);
                img.contrast(parseFloat(val)).write(newPath);
                resolve(newPath);
            })
            .catch(err => {
                console.log(err);
                reject();
            })
    })
}

function brightness(imgPath, val){
    console.log("Progessing Brightness...");
    return new Promise((resolve, reject) => {
        jimp.read(imgPath)
            .then(img => {
                const newPath = createImgSavingPath(imgPath);
                img.brightness(parseFloat(val)).write(newPath);
                resolve(newPath);
            })
            .catch(err => {
                console.log(err);
                reject();
            })
    })
}

function blur(imgPath, val){
    console.log("Progessing Blur...");
    return new Promise((resolve, reject) => {
        jimp.read(imgPath)
            .then(img => {
                const newPath = createImgSavingPath(imgPath);
                img.blur(parseInt(val)).write(newPath);
                resolve(newPath);
            })
            .catch(err => {
                console.log(err);
                reject();
            })
    })
}

function opacity(imgPath, val){
    console.log("Progessing Opacity...");
    return new Promise((resolve, reject) => {
        jimp.read(imgPath)
            .then(img => {
                const newPath = createImgSavingPath(imgPath);
                img.opacity(parseFloat(val)).write(newPath);
                resolve(newPath);
            })
            .catch(err => {
                console.log(err);
                reject();
            })
    })
}

module.exports = {
    sepiaFilter: sepiaFilter,
    grauFilter: grauFilter,
    farbinterungsFilter: farbinterungsFilter,
    flip: flip,
    rotate: rotate,
    contrast: contrast,
    brightness: brightness,
    blur: blur,
    opacity: opacity
};