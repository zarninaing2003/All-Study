const app  =  document.querySelector("#app");



const heading  =  document.createElement("h1");
heading.innerText =  "Min Ga lar par";
heading.classList.add("h-class")
heading.id =  "id-class"
heading.title =  "Heading";
heading.setAttribute("data",3);

// console.log(heading);

const ul  =  document.createElement("ul");

// const list1 =  document.createElement("li");
// list1.innerText = "Apple";

// const list2 =  document.createElement("li");
// list2.innerText = "Orange";

// const list3 =  document.createElement("li");
// list3.innerText = "Mango";

// const list4 =  document.createElement("li");
// list4.innerText = "Banana";

// const list5 =  document.createElement("li");
// list5.innerText = "Strawberry";

//  ul.append(list1);
// ul.append(list2);
// ul.append(list3);
// ul.append(list4);
// ul.append(list5);

const createList  =  (text) => {
    const list  =  document.createElement("li");
    list.innerText =  text;
    return list;
}


// console.log(ul);

app.append(ul)

// app.append(heading);

const textInput  =  document.createElement("input");
const btn  = document.createElement("button")
btn.innerText =  "Add New";
btn.id  =  "btn";
btn.onclick =  () => {
    // console.log("Hello U click");
    // console.log(textInput.value);
    // const list6 =  document.createElement("li");

    ul.append(createList(textInput.value));
    textInput.value =  null;

}

textInput.type =  "text"
textInput.placeholder = "Say something"
console.log(textInput);
// console.log(btn);
// app.append(textInput)
// app.append(btn)

ul.before(heading);
ul.after(textInput)
textInput.after(btn)

// textInput.remove();


const createOption  =  (text,value) => {
    const option  =  document.createElement("option")
    option.innerText =  text;
    option.value =  value;
    return option;
}


console.log(createOption("Myanmar","Mm"));



