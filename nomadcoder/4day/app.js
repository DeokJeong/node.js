const title = document.querySelector("#app h1");
const colorArray = ["red", "blue", "green", "pink", "yellow"];

function handleTitleClick() {
    title.style.color = colorArray[0];
}
function mouseLeave() {
    title.style.color = colorArray[1];
}
function handleWindowResize() {
    title.style.color = colorArray[2];
}
function mouseEnter() {
    title.style.color = colorArray[3];
}
function conTextMenu() {
    title.style.color = colorArray[4];
}

title.addEventListener("click", handleTitleClick);
title.addEventListener("mouseleave", mouseLeave);
title.addEventListener("mouseenter", mouseEnter);
title.addEventListener("contextmenu", conTextMenu);

window.addEventListener("resize", handleWindowResize);
