function getImagePath(image){
    var path = image.getAttribute("src");
    console.log(path);
    document.getElementById("modalImgTarget").setAttribute("src", path);
    document.getElementById("imagepath").setAttribute("value", path);
}