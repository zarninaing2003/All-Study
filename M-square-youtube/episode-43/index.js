// function 

// function declaration
let  num1 = 0;
// parameter
function square(number){
   num1 = number**2;
   num1 += 4;
   num1 /= 2;
}
square(5);
console.log(num1);


let num2 = 10;
function calculate(number){
    num2 = number *2;
    num2 += 10;
    num2 -= 10;
    num2 /= 5;
}

calculate(10);
calculate(20);
calculate(30);
console.log(num2);

let num3 = 0;
function cal(firstNumber,secondNumber){
    num3  += firstNumber * secondNumber;
    num3 /= 50;
}

cal(200,3);
console.log(num3);


// num1 -->0,num1-->16;
// call the declared function to use it


// Value Returning function
function getNumber(number){
    return number;
}

 const myNumber = getNumber(5);

// built in function
// alert("hello World");
// prompt("zar ni naing");


// ES6 arrow function

const myArrowFunction= (para1,para2)=>{
    return para1 *para2;

}
 const result = myArrowFunction(4,200);
 console.log(result);
