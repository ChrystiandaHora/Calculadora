let display = document.getElementById('display');
let buttons = Array.from(document.getElementsByClassName('button'));

buttons.map( button => {
    button.addEventListener('click', (e) => {
        switch(e.target.innerText){
            /*case para apagar os algarismos no display*/
            case 'C':
                display.innerText = '';
                break;
            /*case para dar o resultado dando o valor apos colocar os valores e o simbolo operacional*/
            /*A função eval computa um código JavaScript representado como uma string.*/
            case '=':
                try{
                    display.innerText = eval(display.innerText);
                } catch {
                    display.innerText = "Error"
                }
                break;
            /*case para apagar o ultimo algarismo do display*/
            /*slice serve para apagar o ultimo algarismo no display*/
            case '←':
                if (display.innerText){
                   display.innerText = display.innerText.slice(0, -1);
                }
                break;
            default:
                display.innerText += e.target.innerText;
        }
    });
});