/*
<div class="parent">
<div class="child">Child One</div>
<div class="child">Child Two</div>
</div>
*/


const bodyElement  =  document.getElementsByTagName("body");

const parentDiv =  document.createElement("div");
parentDiv.classList.add("parent");


const childDivOne  =  document.createElement("div");
childDivOne.classList.add("child","test")
childDivOne.classList.remove("child");

childDivOne.append("Child One");

const childOneText  =  document.createTextNode("child One")
childDivOne.classList.add("child")

const childDivTwo =  document.createElement("div");
const childTwoText  =  document.createTextNode("child Two")
childDivTwo.appendChild(childTwoText)

parentDiv.append(childDivOne,childDivTwo);

// bodyElement.append(parentDiv);

const styleTest  =  document.getElementsByClassName("styleTest")[0];
console.log("the styleTest Width is:",getComputedStyle(styleTest).width);
console.log("the styleTest Height is:",getComputedStyle(styleTest).height);
console.log("the styleTest Background-Color is:",getComputedStyle(styleTest).backgroundColor);