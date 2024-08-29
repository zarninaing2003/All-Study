// Object

const num1 = 10;
const cityName = "Yangon";
const isLoggedIn =  true;


const carInfo = {
    brand: "Toyota",
    price: 30000000,
    purchasedYear:2020,
    model: 2010
}


const myInfo = {
    name: "zar ni phone naing",//key value pair
    age:21,
    height: 180,
    isMarried: false,
    city :"Yangon",
    dateOfBirth:2003,
    job: "Developer",
    walk :()=>{
        alert("He is walking Every Morning");
    }
};


const input1Value = "MgMg";
const input2Value = "1000";
const propertyName = "donatedBy" + input1Value;
myInfo.propertyName = input2Value;//wrong** propertyName: "1000";
myInfo[propertyName] = input1Value;//right right donatedBy : "1000";

// push key and value;
myInfo.hobby = "football";
myInfo.eat = ()=>{
    alert("He is eating now");
}


// donation object's properties and methods 

// console.log(myInfo.name);
// console.log(myInfo.age);
// console.log(myInfo.city);
// console.log(myInfo.dateOfBirth);
// myInfo.walk();
// bracket notation

// myInfo["name"];
// myInfo["age"];
// console.log(myInfo["walk"]());


// String "+"'
firstName = "zar ni";
lastName =  "phone naing";
fullName = firstName + " " + lastName;
console.log(fullName);

// window object