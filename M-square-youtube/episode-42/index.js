// Switch Conditional Statement

// switch 
// const num1 = 1;
// let num2 = 0;
// switch (num1){
//     case 1:
//         num2 += 1;
//         break;

//     case 2:
//         num2 += 2;
//         break;
//     case 3:
//         num2 += 3;
//         break;
//     default:
//         num2 += 4;
// }
// console.log(num2);

// const name1 = "hsu myat ";
// let num2 = 0;
// switch(name1){
//     case "zar ni naing":
//         num2 += 10;
//         break;
//     case "hsu myat hlaing":
//         num2 +=  15;
//         break;
//         default:
//             num2 += 20;
// }
// console.log(num2);


const clickTab = "ABOUT";

switch(clickTab){
    case "HOME":
        console.log("This is HOME Tab");
        break;
    case "VIDEOS":
        console.log(":This is VIDEOS Tab");
        break;
    case "PLAYLISTS":
        console.log("This is PLAYLISTS");
        break;
    case "CHANNELS":
        console.log("This is CHANNELS");
        break;
    case "DISCUSSION":
        console.log("This is DISCUSSION");
        break;
    case "ABOUT":
        console.log("This is ABOUT");
        break;
    default:
        console.log("This is Not Page");
}