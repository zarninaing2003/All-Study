// Json ==>(Javascript Object Notation);


const jsObj  =  {comment: "This is first comment"};
// const convertJsonString  = JSON.stringify(jsObj)
// console.log(typeof convertJsonString);
// localStorage.setItem("comment",convertJsonString)

const cities =[
    {
        name:"Yangon",
        population: "6 millions",
        region : "Asia",
        isCapital: false,
    },
    {
        name:"Mandalay",
        population: "2000 00",
        region : "Asia",
        isCapital: false,
    }
]

const convertJsonString = JSON.stringify(cities);//serialization
localStorage.setItem("city", convertJsonString);


const cityFormLocalStorage   = localStorage.getItem("city");
console.log("cityFormLocalStorage is :", cityFormLocalStorage);


const cityAsJsArray  =  JSON.parse(cityFormLocalStorage);//deserialization
console.log("cityAsJsObj is:", cityAsJsArray[1]);


// javascript data type ==> Json string ==> serialization
//Json String ==> javascript data type ==> deserialization
