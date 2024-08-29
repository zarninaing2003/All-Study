// Loop

// DRY Don't REPEAT Yourself

/*  For Loop Start*/

// let customers = [
//     { phoneNumber: '123-456-7890', email: 'customer1@example.com', dateOfBirth: '1990-01-01' },
//     { phoneNumber: '987-654-3210', email: 'customer2@example.com', dateOfBirth: '1985-05-15' },
//     { phoneNumber: '555-123-4567', email: 'customer3@example.com', dateOfBirth: '1998-09-30' },
//     { phoneNumber: '222-333-4444', email: 'customer4@example.com', dateOfBirth: '1977-12-10' }
// ];



// for(let i = 0;i<customers.length;i++){
//     let customerEmail = customers[i].email;
//     let customerBirthday = customers[i].dateOfBirth;
//     if(customerBirthday ===15.10){
//         sendEmailDiscountBirthday(customerEmail);
//     }else{
//         sendEmail(customerEmail)
//     }
// }

// const sendEmail = (email)=>{
//     console.log("Hello Customers Your Email is :",email);
// }

// const sendEmailDiscountBirthday = (email)=>{
//     console.log("You receive the Discount Price",email);
// }
// // get customers email
// const customer1 = customers[0];
// const customer1Email = customer1.email;
// const customer2Email = customers[1].email;
// console.log(customer2Email);
// const customer3Email = customers[2].email;
// console.log(customer3Email);
// const customer4Email = customers[3].email;
// console.log(customer4Email);
// console.log(customer1);
// console.log(customer1Email);



// for(let i=0;i<customers;i++){
//     console.log(customers[i]);
// }

// const cities = ["Yangon","Mandalay","Myitkyan","Beijing","Shanghia"];
// for(let i=0;i<cities.length;i++){
//     console.log("Hello",cities[i]);
// }
/* For Loop Ending */


// for in loop

// const customers= {
//     name: "customer1" ,
//     phoneNumber:12345678,
//     email:"coustomer1@gmail.com"
// }
// for(let propertyName in customers){
//     console.log(propertyName,customers[propertyName]);
// }


// While loop
// let validNumber = true;
// while(validNumber){
//     let promptNumber = prompt("Please Enter number 1 and 100");
//     let parseIntNumber = parseInt(promptNumber,10);
//     if(parseIntNumber>1 & parseIntNumber<100){
//         console.log("Enter Value:",parseIntNumber);
//         validNumber =false; //exist condition
//     }
// }


let num = 1;
while(num<10){
    console.log("Number is:",num);
    num++;
}
