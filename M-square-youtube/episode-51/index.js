// // // Define an array to store customer information
// // let customers = [
// //   {
// //     name: "John Doe",
// //     email: "john@example.com",
// //     gender: "Male",
// //     age:20
// //   },
// //   {
// //     name: "Jane Smith",
// //     email: "jane@example.com",
// //     gender: "Female",
// //     age:30
// //   },
// //   {
// //     name: "Sam Johnson",
// //     email: "sam@example.com",
// //     gender: "Male",
// //     age:40

// //   },
// //   {
// //     name: "Emily White",
// //     email: "emily@example.com",
// //     gender: "Female",
// //     age:50

// //   }
// // ];

// // const isMale = (arrayElement)=> {
// //     return arrayElement.gender ==="Male" && arrayElement.age <40;
// // }

// // console.log(customers.filter(isMale));


// // // Array map with ES6 arrow function


// // let result1 = customers.map((element)=>{
// //     element.booking = [];
// //     return element;
// // })

// // console.log(result1);

// // const numbers = [1,2,3,4,5];
// // const answer = numbers.map((el)=>{
// //     return el*2;
// // })

// // console.log(answer);

// // let textString = "Hello Mingalar";
// //  let text1 = textString.toUpperCase();
// //  let text2 = textString.toLocaleLowerCase();
// //  let text3 = textString.length;
// //  let text4 = textString.indexOf("g");
 
// //  console.log(text1);
// //  console.log(text2);
// // console.log(text3);
// // console.log(text4);



// //   let key = Object.keys(customers);
// //  let val = Object.values(customers);
// //  console.log(key);
// //  console.log(val);

// //   let has= customers.hasOwnProperty("gender");
  
// // // console.log(has);

// // const town = ["Yangon","Mandalay","Mihla"];
// // console.log(town.push("Sitkwin"));
// // console.log(town);
// // console.log(town.unshift("Japan"));
// // console.log(town);
// // console.log(town.pop());
// // console.log(town);
// // console.log(town.shift());
// // console.log(town);
// // console.log(town.indexOf("Mandalay"));
// // console.log(town);
// // console.log(town.slice(0,2));
// // console.log(town);
// // console.log(town.splice(0,1));
// // console.log(town);
// // console.log(town.join(","));
// // console.log(town);


// // Try Catch Error Handling
// const users  = ["Maria","John","Doe"];
// const showChatSideBar = ()=>{
//   for(const i = 0; i<users.length; i++){
//     console.log("Show Chat Side Bar");
//   }
// }

// const showChatLeftSideBar = () =>{
//   console.log("Show Chat Left Bar");
// }

// const showChatMainSidebar  = () =>{
//   console.log("Show Chat Main Side bar");
// }


// try{
//   showChatSideBar();
// }catch(r){
//   console.log("Error Catch Here:",r);
// }
// showChatLeftSideBar();
// showChatMainSidebar();


class Parents{
  constructor(father,mother){
    this.father = father;
    this.mother = mother;
  }
  greeting(){
    console.log("Hello zar ni lay");
  }

   static sayHello(){
    alert("HI zar ni phone");
  }
}

Parents.sayHello();//static par yin class ka nay call ya tal kwa;


let newPerson = new Parents("U KO KO","Daw May");
console.log(newPerson);

class children extends Parents{
  constructor(father,mother,childName){

    // super ka Parents class ko modified
    // sup children class ko modified
    super(father,mother);
    this.childName = childName;
  }
}

let childOne = new children("U KO KO","Daw May","Mg zar ni");
console.log(childOne);
childOne.greeting();//Not enter static
// childOne.sayHello();//Not enter static