// Scope 
// Global Scope and Local Scope

let city = "Yangon";//Global Scope
function myFunction(){
    let carName = "Wish"//local scope
     num = 1;
    console.log("My native town is:",city);
}
myFunction();

// console.log(carName);//raise error this is local scope 
console.log(num);//will not raise error


{
    let num1 = 1;
    const x = 5;
    var y ="zar";
}
//console.log(x);//const is block scope will raise error
console.log(y);//var is function scope that will raise not error
// console.log(num1);  //this is error


let town = "Sitkwin";
const outerFunction =()=>{

    var num2 = 10;

    if(num2===10){
        var numWithVar = 1;
        let numWithLet  = 2;
        const numWithConst = 3;
    }
console.log(numWithVar);//1
// console.log(numWithLet);Will raise error
// console.log(numWithConst);Will raise error

const innerFunction=()=>{
console.log(numWithVar);
}

innerFunction();
}
outerFunction();


// continue Break


const customers =[
    {name:"customer1",email:"customer1@gmail.com",gender:"Female"},
    {name:"customer2",email:"customer2@gmail.com",gender:"Male"},
    {name:"customer3",email:"customer3@gmail.com",gender:"Female"},
    {name:"customer4",email:"customer4@gmail.com",gender:"Male"},
    {name:"customer5",email:"customer5@gmail.com",gender:"Female"},
];
for(let i=0; i<customers.length;i++){
    let currentCustomer = customers[i];
    if(currentCustomer.gender ==="Male"){
        continue;
    }
    // console.log("Sending Email to:",currentCustomer.email);
}


// for(let i =0;i<customers.length;i++){
//     let currentCustomer = customers[i];
//     console.log("Sending Email to:",currentCustomer.email);
//     if(i===2){
//         break;
//     }
// }



// While 
let i = 0;
while(i<customers.length){
    let currentCustomer = customers[i];
    i++;//exist condition
    if(currentCustomer.gender ==="Male"){
        continue;
    }
    console.log("Sending Email to:",currentCustomer.email);
}


let j = 0;
while(j<customers.length){
    let currentCustomer = customers[i];
    console.log("Sending Email to:",currentCustomer.email);

    i++;//exist condition
    if( j===3){
        break;
    }
}