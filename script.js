function searchItem(arr, keyword, callback) {
    // find matches using filter and call callback
    let newArr = arr.filter((el) => {
        if (el.includes(keyword)) {
            return el;
        }
    });
    callback(newArr)
}

searchItem(["apple", "mango", "banana"], "an", function (result) {
    console.log(result);
});
