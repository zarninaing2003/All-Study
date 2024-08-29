// 2 dimensional array

num1 = [1,2,3,4];//one dimensional
num2 = [[1,2],[3,4],[5,6]];  //2 dimensional
console.log(num1[0]);
console.log(num2[1]);

// looping array


// 1d loop array
for(let i=0;i<num1.length;i++){
    const num = num1[i];
    console.log(num);
}

// 2d dimensional Array

for(let i=0;i<num2.length;i++){
    let currentArray = num2[i];
    for(let i=0;i<currentArray.length;i++){
        let currentElement = currentArray[i];
        console.log("Current Element is:",currentElement);
    }
}

// Destructuring, Spread Operator and Rest Parameter (ES6 Feature)

// object Destructuring
const customer = {name:"customer1",email:"customer1@gmail.com",gender:"Female"};

// const name = customer.name;
// const email = customer.email;
// const gender = customer.gender;

// ES6 Destructuring

const {name,email,gender} = customer;
console.log(name,email,gender);

const cities = ["Yangon","Mandalay","Myitkyina"];
// const cityOne = cities[0];
// const cityTwo = cities[1];
// const cityThree = cities[2];

// Array Destructuring

const [cityOne,cityTwo,cityThree] = cities;
console.log(cityOne,cityTwo,cityThree);


// Spread Operator
// object
const customer2 = {name:"customer2",email:"customer2@gmail.com",gender:"Male"};
const copyNumber = Object.assign({},customer2);
const copyNum = {...customer};
console.log(copyNum);


// Array
const myTown = ["Yangon","Mandalay","Sitkwin"];
const copyTown = [].concat(myTown);
const copyTown1 = [...myTown];
const nweTown = [...myTown,"Minhla"];
console.log(nweTown);
console.log(copyTown1);
console.log(copyTown);


// Rest Operator (...)
const calculate=(...params)=>{

    let total = 0;
    for(let i=0;i<params.length;i++){
         total += params[i];
    }
    return total;
}


console.log(calculate(1,2,3,4,5));

