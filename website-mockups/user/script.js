function getImagePath(image){
    var path = image.getAttribute("src");
    console.log(path);
    document.getElementById("modalImgTarget").setAttribute("src", path);
}