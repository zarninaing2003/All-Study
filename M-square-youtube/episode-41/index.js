// Condition Statements

// if
const num1 = 2;
let num2 = 0;

// if(num1==num2){
//     console.log("Yes, It is true");
// }else{
//     console.log("No, It is not true");
// }

// const so ma ya buu
// if(num1 ===5){
//     num2 += 5;
//     console.log(num2);
// }else{
//     num2 += 10;
//     console.log(num2);
// }

// let email ="zarninaing423@gmail.com";
// let password = 1234;
// if(email === "zarninaing423@gmail.com" &&  password===1234){
//    console.log("Your enter my account"); 
// }else{
//     console.log("Your not enter account");
// }

// if(num1===1){

//     num2 += 5;
//     console.log(num2);
// }else if(num1===2){
//     num2 += 10;
//     console.log(num2);
// }else{
//     num2 += 15;
//     console.log(num2);
// }

// if(num1>2){
//     num2 += 5;
//     console.log(num2);
// }else if(num1===3){
//     num2 += 10;
//     console.log(num2); 
// }else if(num1===2){
//     num2 += 15; 
//     console.log(num2);
// }else {
//     num2 += 50;
//     console.log(num2);
// }

/*

Airline Ticket Example

not member = full price;
normal member = 5% discount;
silver member = 10% discount;
gold member =  15% discount;
platinum member = 20% discount;
*/

const originalPrice = 100;
let totalPrice = 0;
const memberType  = "silverMember";

if(memberType === "normalMember"){
    totalPrice += 100 *0.95;
}else if(memberType ==="silverMember"){
    totalPrice += 100 * 0.9;
}else if(memberType === "goldMember"){
    totalPrice += 0.85;
}else if(memberType === "platinumMember"){
    totalPrice += 100 * 0.8;
}else{
    totalPrice += originalPrice;
}

console.log(totalPrice);
