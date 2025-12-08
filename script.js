function task1(callback) {
    console.log("Task - 1 Scheduled")
    setTimeout(() => {
        callback();
    }, 2000);
    // 2 second timeout then callback("Task 1 done")
}

function task2(callback) {
    // 1 second timeout then callback("Task 2 done")
    console.log("Task - 2 Scheduled")
    setTimeout(() => {
        callback();
    }, 3000);
}

// after both finish print "All tasks completed"

task1(function () {
    console.log("Task 1 Completed ✅")
    task2(function () {
        console.log("Task 2 Completed ✅")
        bothDone()
    })
})

function bothDone() {
    console.log("Both done")
}
