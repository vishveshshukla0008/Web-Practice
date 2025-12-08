function loadImage(fileName, callback) {
    // if file ends with .png or .jpg return success else failure
    if (fileName.endsWith(".pic") || fileName.endsWith(".jpg")) {
        callback("uploaded")
        return;
    }
    callback("Your format isn't correct !")

}

loadImage("pic1.svg", function (msg) {
    console.log(msg);
});
