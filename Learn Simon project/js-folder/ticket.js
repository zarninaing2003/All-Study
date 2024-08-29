let btnBuyTicket = document.getElementById(btnBuyTicket);
btnBuyTicket.onclick = function(){
    let userAge = document.getElementById('userAge');
    let displayTicketFees = document.getElementById('displayTicketFees');
    userAge = parseInt(userAge.value);

    if(userAge >65){
        displayTicketFees.innerHTML = 'You are Senior,pay $5';
    }else if(userAge >=18){
        displayTicketFees.innerHTML = 'You are an Adult,pay $10';
    }else if(userAge >=10){
        displayTicketFees.innerHTML = 'You are a Teenager, pay $8';
    }else {
        displayTicketFees.innerHTML = 'you are a Child: Free!';
    }
        
}




