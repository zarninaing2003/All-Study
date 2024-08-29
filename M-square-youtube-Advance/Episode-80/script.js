// Set Time Out 

const  buttonElement  =  document.querySelector(".btn-primary");
const  boxElement  =  document.querySelector(".box");


buttonElement.addEventListener("click",() => {
    boxElement.style.backgroundColor =  "green";
    setTimeout(() => {
      boxElement.style.backgroundColor  =  "red";  
    },3000)
})