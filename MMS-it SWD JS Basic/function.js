// // console.log("JS Function");

// // function run(){
// //     let x = 20;
// //     let y= 20;
// //     console.log(x+ y);
// // }

// // run();

// // function star(){
// //     console.log("*");
// //     console.log("* *");
// //     console.log("* * *");
// //     return "This is stars"
// // }

// // star();
// // console.log(star());

// // function sum (a,b) {
// //     return a+b;
// // }
// // console.log(sum(11,3));

// // function allStars(text){
// //     console.log(`${text}`);
// //     console.log(`${text} ${text}`);
// //     console.log(`${text} ${text} ${text}`);
// // }

// // allStars("*");
// // allStars("0");
// // allStars("-");
// // allStars("a");

// // function adding(x,y){
// //     return x+y;
// // }
// // console.log(adding(3,4));

// function calcAge(birthYear){
//     let currentYear = 2024;
//     return `My age is ${currentYear - birthYear} years old.`;
// }

// console.log(calcAge(2003));

// //tax calculate %5 amount 

// function calcTax(amount,taxPercentage = 5){
//     let tax  =(amount/100) * taxPercentage;
//     return tax;
// }

// console.log(calcTax(10000));
// console.log(calcTax(345,50));

// let x ;
// console.log(x);

// let y = null;
// console.log(y);

// function practical
let results  = [];
let resultIndex = 0;
 function areaCalc(w,b){
    // return w*b;

    let area  = w*b;
    const result  = {
        width: w,
        breadth: b,
        area: area + "Sqft",
    
    }

    results[resultIndex++] = result; 
    return result;
 }

//  console.log(areaCalc(20,3));
//  console.log(areaCalc(20,39));
//  console.log(areaCalc(20,33));
//  console.log(areaCalc(20,44));

 console.table(results);

let rates = {
    USD:2100,
    SGD:1579,
    EUR:2355
}
// console.log(rates);
// console.log(rates.USD);
// console.log(rates["EUR"]);
function toMMK (amount, currency){
    // console.log(rates[currency]);
    const exchangeRate = rates[currency];
    // return `${amount  * exchangeRate} MMK`
    return amount * exchangeRate;;//Dar ka kyite taet rate pyaung poet
 }

console.log(toMMK(100,"USD"));
// console.log(toMMK(100,"SGD"));
// console.log(toMMK(100,"EUR"));
// 100000 MMk to USD
// 35000 MMk to SGD
// 600000 MMk to EuR
function toCurrency(amount,currency){
    let exchangeRate = rates[currency];
    // return `${(amount / exchangeRate).toFixed(2)}   ${currency}`.
    return amount / exchangeRate;//Dar ka kyite taet rate pyaung poet

}
// console.log(toCurrency(10000, "USD"));
// console.log(toCurrency(35000, "SGD"));
// console.log(toCurrency(600000, "EUR"));

// ******From ko MMK pyung  p yin To ko pyung******
function exchange(amount,fromCurrency,to){
    let mmk = toMMK(amount,fromCurrency);
    return  toCurrency(mmk,to);
}
console.log(exchange(100,"USD","SGD"));
console.log(exchange(100,"EUR","USD"));
console.log(exchange(100,"SGD","EUR"));

const fruits = {
    apple:500,
    orange:300,
    mango:700,
    banana:350
}

let total = 0;
let voucher = [];
let voucherIndex  = 0;

function calcTax(amount,taxPercentage = 5){
     let tax  =(amount/100) * taxPercentage;
    return tax;
}
function toBuy(item,quantity){
    let itemPrice  = fruits[item];
    let cost   = itemPrice * quantity;
    total  = total +cost;

    let listPrice  = {
        item,
        price:itemPrice,
        quantity,
        cost

    }
    voucher[voucherIndex++]  = listPrice;
    return cost;
}
// console.log(toBuy("apple",5));
// console.log(toBuy("orange",8));
// console.log(toBuy("mango",2));
// console.log(toBuy("banana",15));
// console.log(" My fruits total is:" +total);
// console.table(voucher);
// console.log("Tax price is :"  + calcTax(total));
// console.log("Total price is: " + total + calcTax(total));

// console.table(
//     {
//         total,
//         tax: calcTax(total),
//         netTotal : total + calcTax(total)
//     }
// );



