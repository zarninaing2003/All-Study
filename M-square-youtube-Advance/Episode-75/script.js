const transitionButtonTag  =  document.querySelector(".transitionButton");
const transitionTag  = document.querySelector(".transition");
transitionButtonTag.addEventListener("click",() => {
    transitionTag.classList.add("startTransition");
})

