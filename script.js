let done1 = false;
let done2 = false;

function task1(callback) {
    console.log("Task - 1 Scheduled")
    setTimeout(() => {
        done1 = true;
        callback();
        bothDone()
    }, 2000);
    // 2 second timeout then callback("Task 1 done")
}

function task2(callback) {
    // 1 second timeout then callback("Task 2 done")
    console.log("Task - 2 Scheduled")
    setTimeout(() => {
        done2 = true;
        callback();
        bothDone()
    }, 3000);
}

// after both finish print "All tasks completed"

task1(function () {
    console.log("Task 1 Completed ✅")
    task2(function () {
        console.log("Task 2 Completed ✅")
    })
})

function bothDone() {
    if (done1 && done2) {
        console.log("Both Done")
    }
}
