// Event

// Emitter, listener, or Handler


const myButton  = document.getElementById("myButton");
const image  =  document.getElementsByClassName("girl")[0]; //HTML Collection
const originalImageLink  =  image.src;
const imageArray  =  [
    "https://images.unsplash.com/photo-1561948955-570b270e7c36?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGNhdHxlbnwwfHwwfHx8MA%3D%3D",
    "https://images.unsplash.com/photo-1543852786-1cf6624b9987?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGNhdHxlbnwwfHwwfHx8MA%3D%3D",
    "https://images.unsplash.com/photo-1533738363-b7f9aef128ce?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Y2F0fGVufDB8fDB8fHww",
    "https://images.unsplash.com/photo-1592194996308-7b43878e84a6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGNhdHxlbnwwfHwwfHx8MA%3D%3D",
    "https://media.istockphoto.com/id/1443562748/photo/cute-ginger-cat.jpg?s=1024x1024&w=is&k=20&c=QaEkKC7lFEBrzzPftMRBVuOZq4FNOnUjOV1VqTmpMfY=",
]

let counter  =  0;
 const myFun  =() => {
    if(counter === 5){
        
        image.src   = originalImageLink;
        counter =  0;
        return counter;
    
    }
    imageLink  =  imageArray[counter];
    image.src  = imageLink;
    counter  += 1;
    console.log("Counter value is :",counter);
 }

myButton.addEventListener("click" , myFun);


