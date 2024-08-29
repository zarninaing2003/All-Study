// Array

// {}===>empty object,unorder collection
// []===>empty array,order collection

const undered = {z:"hello",y:"world",x:"test"};
const ordered = ["Yangon","Mandalay","Naypitaw"];

// index
// Accessing array element
ordered[0]= "myitgyinar";
console.log(ordered);

// array.length property
for(let i=0;i<ordered.length;i++){
    console.log(ordered[i]);
}

// push method
ordered.push("Sitkwin");
console.log(ordered[3]);
console.log(ordered);
ordered.pop();
console.log(ordered);
ordered.unshift("Mihhla");
console.log(ordered);
ordered.shift();
console.log(ordered);

const index  =ordered.length-1;
console.log(ordered[index]);
console.log(ordered.push("Taunggyi"));
console.log(ordered);
console.log(ordered.splice(1,3));

const order = ["apple","banana","mango","lemon"];
console.log(order);
 const resultIndex = order.indexOf("lemon");
 console.log(resultIndex);
 const resultSplice = order.splice(1,3);
 console.log(resultSplice);

 const carInfo = {
    name: "Whish",
    model: 2011,
    productFrom: "Japan",
    owner: "zar ni phone naing",
    number:1639
 }

 order.push(carInfo);
 console.log(order);