document.addEventListener("mousemove", throttle(function (e) {
    console.log(`${e.clientX}, ${e.clientY}`);
}, 1000))


function throttle(fn, delay) {
    let timer = 0;
    return function (e) {
        let now = Date.now();
        if (now - timer >= delay) {
            timer = now;
            fn(e);
        }
    }
}

function debounce(fn, delay) {
    let timer;

    return function (e) {
        clearInterval(timer)
        timer = setTimeout(() => {
            fn(e)
        }, 2000)
    }
}