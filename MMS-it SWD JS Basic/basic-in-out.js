// const answer = window.prompt("what is your name");
// const age  =  window.prompt("How old are you");
// window.alert(`I am ${answer} and I am ${age} years old.`)

// const confirm  =  window.confirm("Are you finish Dinner");

// console.log(confirm);

function calcAge(dateString){
    const date   = new Date(dateString);
    const year  = date.getFullYear();
    const current =  new Date();
    const currentYear  =  current.getFullYear();
    return currentYear - year;
}

const ans  = window.prompt("Your are birthday is?");

window.alert(calcAge(ans));