var areNumbersAscending = function (s) {
    let strArr = s.split(" ");
    let ans = true;
    let prev = null;
    for (let i = 0; i < strArr.length; i++) {
        if (!isNaN(strArr[i])) {
            let curr = Number(strArr[i]);
            if (prev == null) {
                prev = curr;
            } else if (curr <= prev) {
                ans = false;
                break;
            } else {
                prev = curr;
                curr = strArr[i];
            }
        }
    }

    return ans;
};

console.log(areNumbersAscending("hello world 5 x 6"));
