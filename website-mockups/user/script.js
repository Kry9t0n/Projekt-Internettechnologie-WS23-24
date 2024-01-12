function getImagePath(image){
    var path = image.getAttribute("src");
    document.getElementById("modalImgTarget").setAttribute("src", path);
}