let selectProgrammingLang = document.getElementById('selectProgrammingLang');
selectProgrammingLang.onchange = function(){
    let selectedValue = selectProgrammingLang.value;
    switch(selectedValue){
        case '1':
           displayOption.innerHTML = 'HTML and CSS';
           break;
         case '2':
            displayOption.innerHTML = 'JavaScript';
            break;
        case '3':
            displayOption.innerHTML = 'Python';
                break;
     default:
            desplayOption.innerHTML = 'Don\'t know';
            break;
    }
}