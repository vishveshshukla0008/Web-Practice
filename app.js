var digitSum = function (s, k) {
    while (s.length > k) {
        s = roundTrip(s, k);
    }
    return s;


    function roundTrip(s, k) {
        let i = 0;
        let j = 0;
        let ans = "";
        let sum = 0;
        for (; i < s.length;) {
            while (j < k && i < s.length) {
                sum += (s[i] - '0');
                j++;
                i++;
            }
            ans = ans + sum;
            sum = 0;
            j = 0;
        }

        return ans;

    }
};


console.log(digitSum("11111222223", 3));