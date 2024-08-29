const buttonTag  =  document.querySelector(".btn");
const parentTag  =  document.querySelector(".parent");



const openToastAlert =  () => {
    parentTag.innerHTML  =  "";
    const toastTag   =  document.createElement("div");
    toastTag.append("Your Filed is successfully upload!");
    toastTag.classList.add("toastAlert")
    parentTag.append(toastTag);
    toastTag.style.bottom  =  `-${toastTag.offsetHeight}px`
    setTimeout(() => {
        toastTag.style.bottom  = `0px`;
    },100);

    setTimeout(() => {
            toastTag.style.bottom  =  `-${toastTag.offsetHeight}px`
    },3000);
}
buttonTag.addEventListener("click",() => {
    openToastAlert();
})