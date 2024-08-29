// try catch
// Error Handling

// try{
//     const number = 1;
//     number++;
// }catch(r){
//     console.log("Catch error is here:",r);
// }


const users = ["Maria","Marcus","Ken","Hannah"];
const showChatSidebar = ()=>{
    for(const i=0; i<users.length;i++){//error const const number is not change
        console.log("Code to show  user here:");
    }
}

const showLeftSidebar = ()=>{
    console.log("Code to show  Left sidebar here:");
}

const showMainSidebar = ()=>{
    console.log("Code to show Main sideBar here:");
}

try{
showChatSidebar();
}catch(error){
console.log("Catch error here:",error);
}

showLeftSidebar();
showMainSidebar();
