// // are function

const area  = (w,h) => {
    return w* h;
}

// console.log(area(19,20));
// window.alert("San kyi tar par");



//  const width  =  window.prompt("Your are House Width");
//  const height = window.prompt("Your are House Height");
//  window.alert(area(width,height));
// document.write(area(width,height));

//  const x  = window.confirm("Are you finish Dinner");
//  console.log(x);
//  window.alert( x ? "Sar pp" : " Ma sar ya thy vuu");

// console.log(window);

// document.write("My name is mg zar ni phone naing");

const heading = document.getElementById("heading");
const btn =  document.getElementById("btn");
const listOne  =  document.getElementById("list-1");
const list  =  document.getElementById("list")
const input  =  document.getElementById("textInput");


const run  =  () => {
     const data = input.value;

     heading.innerText = data;
     input.value  = "";
}


// console.log(list);
// console.dir(heading.innerHTML);
// console.dir(heading.innerText);
// console.log(btn.innerHTML);
// console.log(btn.innerText);
// console.log(list.innerHTML);
// console.log(list.innerText);

// console.log(btn);
// console.log(listOne);


