function getImagePath(image){
    var path = image.getAttribute("src");
    console.log(path);
    document.getElementById("modalImgTarget").setAttribute("src", path);
    document.getElementById("imagepath").setAttribute("value", path);
    document.getElementById("imagepathdelete").setAttribute("value", path);
}

function bildHerunterladen() {
    var bildURL = document.getElementById('modalImgTarget').src;
    var downloadLink = document.createElement('a');
    downloadLink.href = bildURL;
    downloadLink.download = 'DownloadPicture.jpg';
    downloadLink.click();
}
