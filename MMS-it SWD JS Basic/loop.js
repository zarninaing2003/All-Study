function run(){
    console.log("*");
    console.log("**");
    console.log("***");
}


// run();
// run();
// run();

for(let i = 0; i<=3 ;i++){
    console.log("*");
    console.log("**");
    console.log("***");
}

for(let i =0; i<=10;i++){
    if(i ===5){
        continue;
    }
    console.log(i,"loop");
}

const arr = ["a","b","c","d","e","f"];

for(let i =0; i<arr.length; i++){
    // console.log(arr[i],"This is arr loop");
}

for(x of arr){
    console.log("This is :"  ,x);
}

for(key in arr){
    console.log( key,arr[key]);
}

const obj = {
    a: "aa",
    b: "bb",
    c: "ccc"
}

for(key in obj){
    console.log(key, obj[key]);
}

