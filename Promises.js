let pr = new Promise((res, rej) => {
    setTimeout(() => {
        if ((Math.random() * 10) > 5) {
            res("I am resolved");
        } else {
            rej("Sorry ! I am rejected");
        }
    }, 2000)
})

pr.then((value) => { console.log(value) }).catch((err) => { console.log(err) })
