var sortSentence = function (s) {
    let a = s.split(" ")
    let b = a.sort((a, b) => a[a.length - 1] - b[b.length - 1]).map((el) => el.slice(0,el.length-1)).join(" ")
    return b;
};

sortSentence('is2 sentence4 This1 a3');