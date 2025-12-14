let allImages = document.querySelectorAll("img");

let observer = new IntersectionObserver((entries, obs) => {

    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            console.log(true)
            let img = entry.target;
            console.log(img)
            img.src = img.dataset.src;
            img.classList.add("loaded");
            // obs.unobserve(entry.target)
        }
    })
}, {
    root: null,
    threshold: 0.1,
});


allImages.forEach((img) => {
    observer.observe(img)
})

console.log(observer)