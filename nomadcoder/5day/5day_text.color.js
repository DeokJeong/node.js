const h1 = document.querySelector("#happy h2");

function handleTitleCilck() {
    const currentColor = h1.style.color;
    let newColor;
    if(currentColor === "blue"){
        newColor = "tomato";
        return
    }else{
        newColor = "blue";
    }
    h1.style.color = newColor;
}

h1.addEventListener('click',handleTitleCilck);


