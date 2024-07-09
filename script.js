const bgchange = document.querySelector("#bg");

bgchange.addEventListener("mousemove", (e) => {
    bgchange.style.backgroundPositionX = e.offsetX/80 + "%";
    bgchange.style.backgroundPositionY = e.offsetY/80 + "%";
})
