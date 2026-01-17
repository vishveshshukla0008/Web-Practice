// Changes the value into binary from decimal :


let num = 65;
let ans = "";

while (num > 0) {
    let bit = num % 2;
    ans = bit + ans;
    // update the value :
    num = Math.floor(num / 2);
}


console.log(ans)