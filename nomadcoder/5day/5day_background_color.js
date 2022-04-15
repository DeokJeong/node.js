const windowResize = document.body;


function handleTitleCilck() {
    const maxWidth = window.innerWidth;
    if( maxWidth > 800 && maxWidth < 1200  ){
        windowResize.classList.remove("pink")
        windowResize.classList.remove("tomato")
        windowResize.classList.add("yellow")
    }else if( maxWidth > 1200 && maxWidth < 2000 ){
        windowResize.classList.remove("tomato")
        windowResize.classList.remove("yellow")
        windowResize.classList.add("pink")
    }else{
        windowResize.classList.remove("yellow")
        windowResize.classList.remove("pink")
        windowResize.classList.add("blue")
    };

};

window.addEventListener("resize", handleTitleCilck);