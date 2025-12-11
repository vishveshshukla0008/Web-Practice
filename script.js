let windowIcon = document.querySelector("#window-icon");
let windowsPanel = document.querySelector(".windows-panel");
let main = document.querySelector("main");
let rightClickCard = document.querySelector(".right-click-card");
let windowModalOpen = false;
windowIcon.addEventListener("click", () => {
    if (windowModalOpen) {
        windowModalOpen = false;
        windowsPanel.style.transform = "translateY(120%)";
        console.log("closing")
    } else {
        console.log("opening")
        windowModalOpen = true;
        windowsPanel.style.transform = "translateY(0%)"
    }
});

window.oncontextmenu = e => {
    e.preventDefault()
    rightClickCard.classList.remove("hide");
    rightClickCard.style.left = e.clientX + "px"
    rightClickCard.style.top = e.clientY + "px"
}

main.addEventListener("click", () => {
    rightClickCard.classList.add("hide");
})


