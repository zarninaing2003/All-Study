// Document Object Model(DOM)  ===>[CRUD]


// c= create
const h1Element  =  document.createElement("h1");
const textNode  =  document.createTextNode("Welcome To Myanmar");
h1Element.appendChild(textNode);
const tagCollection  =  document.getElementsByTagName("body");
const bodyElement   =  tagCollection[0];
bodyElement.appendChild(h1Element)


// r =  read
const readH1Element  = document.getElementsByTagName("h1")[0];
console.log("Text h1 element before update read is:",readH1Element.textContent);

// u  = update
readH1Element.textContent  =  "Welcome To Yangon"
console.log("Text h1 element after is :", readH1Element.textContent);

// d  =  delete
readH1Element.remove();