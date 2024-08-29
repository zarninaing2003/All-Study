// Shopping List (part One)


const inputTag  =  document.getElementsByClassName("form-control")[0];
const shopListContainerTag   =  document.getElementsByClassName("shopListContainer")[0];

let productId = 1;
const handleChange  =  (event) => {
    const inputVale =  event.target.value;
    const parentDiv = document.createElement("div");
    const productContainer   =  document.createElement("div");
    productContainer.classList.add("product-container");
    parentDiv.classList.add("product-Name")
    // <i class="fa-solid fa-trash"></i>
    parentDiv.addEventListener("click", () => {

        const classExit =  parentDiv.classList.contains("purchased");
        if(classExit){
            parentDiv.classList.remove("purchased");
        }else{
            parentDiv.classList.add("purchased")
        }
    })
    const spanTag  =  document.createElement("span");
    const trashIcon  =  document.createElement("i");
    trashIcon.classList.add("fa-solid" ,"fa-trash");
    trashIcon.addEventListener("click",(event) => {
        productContainer.remove();
        
    })
    spanTag.id  = productId;
    const product = productId.toString() + ". "+ inputVale;
    spanTag.append(product);
    parentDiv.append(spanTag, trashIcon);
    productContainer.append(parentDiv, trashIcon)
    shopListContainerTag.append(productContainer);
    inputTag.value  =  "";
    productId += 1;
}
inputTag.addEventListener("change", handleChange);