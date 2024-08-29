
btnGreet.onclick = function(){
    let userInput = document.getElementById('userInput');
    let displayText = document.getElementById('displayText');
    let btnGreet = document.getElementById('btnGreet');

    userInput = parseInt(userInput.value);
    console.log(userInput);

    if(userInput<12){
        displayText.innerHTML = 'Good Morning!';
        }else{
            displayText.innerHTML = 'Good Afternoon!';
        }
}



