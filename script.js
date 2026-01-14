var decodeMessage = function (key, message) {
    let map = new Map();
    let count = 97;
    let ans = "";
    for (let el of key) {
        if (el !== ' ' && !map.has(el)) {
            map.set(el, String.fromCharCode(count))
            count++;
        }
    }


    for (let item of message) {
        if (item == " ") {
            ans += ' ';
        } else {
            ans += map.get(item);
        }
    }

    // console.log(ans)
};


decodeMessage("the quick brown fox jumps over the lazy dog", "vkbs bs t suepuv")