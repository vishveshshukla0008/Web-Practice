let computer = Math.floor(Math.random() * 10) + 1;
let user;
do {
    user = prompt("Please enter the number till 10 to check that is equal to computers nummber or not :")

    if (!isNaN(user) && user != null) {
        if (user > computer) {
            console.log("Your number is Bigger")
        } else if (user < computer) {
            console.log("Your number is smaller")
        } else if (user == computer) {
            console.log("Congradulations ! The number is equal")
            break;
        }
    }
    computer = Math.floor(Math.random() * 10) + 1;
} while (user != null && user != computer);