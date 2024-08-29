const obj ={
    a:"aaa",
    b:"bbb",
    c:function(){
        return "This is function"
    },
    d(){
        return "This is Method"
    }
}

// console.log(obj);
// console.log(obj.c());
// console.log(obj.d());

const exchangeCenter  ={
    name: "MMS Exchange Center",
    address: "No.39, san Chaung",
    openHour: "9 am ",
    closeHour: "10 pm",
    rates: [
        {
            currency: "SGD",
            rate:2100,
        },
        {
            currency: "USD",
            rate: 3000,
        }
    ],
    intro(){
        return `This is ${this.name}`
    },
    exchange: function (amount,fromCurrency,toCurrency){
        return "exchange Money"
    },
    saveRecord: function (list){
        return "Saved"
    }
}

console.log(exchangeCenter.intro());

// console.log(5>10);
// console.log(5==10);
// console.log(5=="5");


if(true){
    console.log("This is true");
}

let currentHour = 11;
if(currentHour >= 10){
    console.log("This is eight o'clock");
}

let comingTime = 10;
if(comingTime <= 9){
    console.log("I attend my school");  
}else{
    console.log("I not attend my school");
}


let ybsFee = 900;

if (ybsFee >= 500){
    console.log("I take the bus");
}else{
    console.log("I can't take the bus");
}

let examMark = 6;

if(examMark >= 80){
    // console.log("I achieve distention my exam");
}else if( examMark >= 40){
    // console.log("I achieve the examination");
}else{
    // console.log("I failed the examination");
}

function isOddEven(x){
     if(x%2 ===0){
        return "This is Even"
     }else{
        return "This is Odd"
     }
}

// console.log(isOddEven(10));
// console.log(isOddEven(7));

function wakeUpTime (x){
    if(x>8){
        return "I will be toke"
    }
    return "I will no be toke"
}

// console.log(wakeUpTime(6));
// console.log(wakeUpTime(10));

function howToGo(pocketMoney){
    if(pocketMoney >=400){
        return "I will go to school bus"
    }
    return "I will go to school walking"
}

// console.log(howToGo(500));
// console.log(howToGo(100));


let busFee = 400;

function requestMoney(pocketMoney){
    if(pocketMoney >= busFee*2){
        return "I will go to school Bus car"
    }
    return "I am angry"
}

// console.log(requestMoney(1000));
// console.log(requestMoney(400));

function startingTime (x){
    if(x>9){
        return "My school is teaching now  started "
    }
    return "My school is not teaching"
}

// console.log(startingTime(10));
// console.log(startingTime(8));

function checkMark(mark){
    if(mark>=80){
        return "I exam distinction"
    }else if( mark >=40){
        return " I  exam the school"
    }else{
        return "I failed the exam"
    }
}

// console.log(checkMark(90));
// console.log(checkMark(60));
// console.log(checkMark(30));


console.log(true ? true : false);
console.log(false ? true : false);
console.log([] ? true : false);
console.log({} ? true : false);

let yourStatus   = false;


console.log("Are you finish" , yourStatus? "  Yes. Finish" : "Not yet");

function exam(write,speaking){
    if(write >= 80 && speaking>=80){
        return " I passed the exam"
    }
    return "U Failed"
}

// console.log(exam(90,90));


function canVote(age,citizen){
    if(age>=18 && citizen === "Myanmar"){
        return "U can vote";
    }
    return "U can not vote"
}

// console.log(canVote(17,"Thailand"));
// console.log(canVote(19,"Myanmar"));
// console.log(canVote(16,"Myanmar"));


function busNOChoice(busNo){
    if(busNo === 65  ||  busNo=== 20){
        return "I can reach the class school"
    }
    return "I can not reach the class school"
}

// console.log(busNOChoice(20));
// console.log(busNOChoice(65));
// console.log(busNOChoice(0));
// console.log(busNOChoice(23));

function eat(food){
    if(food ==="Hotpot"  || food === "Ma Lar shn call"){
        return "I eat this food"
    }
    return "I can not eat this food"
}

// console.log(eat("Hotpot"));
// console.log(eat("Ma Lar shn call"));
// console.log(eat("Mote hin khar"));
// console.log(eat("Owne noe khaut swel"));

// console.log(!true);
// console.log(!false);
// console.log(true);
// console.log(false);

if(true){
    console.log("It is true");
}else{
    console.log("It is false");
}

// console.log(true? "It is true" : "It is false");
// console.log(false? "It is true" : "It is false");

function addingNumber(x,y){
    if(typeof x === "number"  && typeof y === "number"){
        return x + y;
    }
    return "Incorrect Number"
}

// console.log(addingNumber(20,3));
// console.log(addingNumber(3,"0"));

console.log((function(){
    return " I am IIFE"
})());


