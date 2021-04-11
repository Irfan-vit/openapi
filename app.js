var btnTranslate = document.querySelector("#btn-translate");
var txtInput = document.querySelector("#txt-input");
var outputDiv = document.querySelector('#output')



function clickHandler(){
    outputDiv.innerText = "translated  " + txtInput.value + "  To : bababbababababababa ";
};

btnTranslate.addEventListener("click", clickHandler) 



