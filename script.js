function onButtonClick(callback) {
    // after 3 seconds call callback()
    setTimeout(() => {
        callback("Clicked")
    }, 3000)
}

onButtonClick(function () {
    console.log("Button clicked");
});
