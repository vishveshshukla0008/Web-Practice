function fetchData(callback) {
    // generate random success or failed
    setInterval(() => {
        let val = Math.floor(Math.random() * 10);
        if (val >= 5) {
            callback("Success");
        } else {
            callback("Failed")
        }
    }, 2000)
}

fetchData(function (result) {
    console.log(result);
});
