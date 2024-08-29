const hamburgerMenuContainerTag  =  document.querySelector(".hamburgerMenuContainer");
const overlayMenuTag  =  document.querySelector(".overlayMenu");
const hamburgerLine1Tag  =  document.querySelector(".line1")
const hamburgerLine2Tag  =  document.querySelector(".line2")
const hamburgerLine3Tag  =  document.querySelector(".line3")
const liTag  =  document.getElementsByTagName("li");

hamburgerMenuContainerTag.addEventListener("click",() => {
    if(hamburgerMenuContainerTag.classList.contains("isOpened")){
            overlayMenuTag.classList.remove("showOverLayMenu");
            hamburgerLine2Tag.classList.remove("hideLine2");
            hamburgerLine1Tag.classList.remove("rotateLine1");
            hamburgerLine3Tag.classList.remove("rotateLine3");
            hamburgerMenuContainerTag.classList.add("isOpened");
             for(let i = 0; i<liTag.length; i++){
                liTag[i].classList.remove("moveLiTag")
            }
    }else{
        overlayMenuTag.classList.add("showOverLayMenu");
            hamburgerLine2Tag.classList.add("hideLine2");
            hamburgerLine1Tag.classList.add("rotateLine1");
            hamburgerLine3Tag.classList.add("rotateLine3");
            hamburgerMenuContainerTag.classList.add("isOpened");
            for(let i = 0; i<liTag.length; i++){
                liTag[i].classList.add("moveLiTag")
            }
    }

})