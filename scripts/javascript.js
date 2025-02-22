/** Initialize display element by id. */
const display = document.getElementById("display");

/** Handle when user press buttons. */
function appendToDisplay(input){
    display.value += input;
}

/** Handle when user press C button. */
function clrDisplay(){
    display.value = "";
}

/** Handle calculating: when user press = button. */
function calculate(){
    try{
        display.value = eval(display.value);
    }
    catch(e){
        display.value = "Error";
    }
}