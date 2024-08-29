const ulTag    =  document.querySelector("ul");
const sliderTag  = document.querySelector(".slide");

const tabs  =  ["Home", "About", "Services", "Contact Us", "Login"];


const handleChangeSlide  =  (event) => {
    const clickLiTagId  =  event.target.id;
    const clickLiTag  =  document.getElementById(clickLiTagId);
    const clickLiTagWidth   = clickLiTag.offsetWidth;
    const clickLiTagOffsetLeft  =  clickLiTag.offsetLeft;
    sliderTag.style.width  =  clickLiTagWidth + "px";
    sliderTag.style.transform  =  `translateX(${clickLiTagOffsetLeft}px)`
}
for(let i = 0; i<tabs.length; i++){
    const liTag  =  document.createElement("li");
    liTag.append(tabs[i].toUpperCase());
    liTag.id  =  i;
    liTag.addEventListener("click",handleChangeSlide);
    ulTag.append(liTag);
    if(i === 0){
        sliderTag.style.width  =  liTag.offsetWidth + "px";
    }
}