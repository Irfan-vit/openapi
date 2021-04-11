var btnTranslate = document.querySelector("#btn-translate");
var txtInput = document.querySelector("#txt-input");
var outputDiv = document.querySelector('#output')
var serverURL = "https://api.openweathermap.org/data/2.5/weather?q="
var key = "&appid=49257f6591cfc3ed8daf0b5970d519cb"

function getTranslationURL(text) {
    return serverURL + text + key
}

function clickHandler() {
    // outputDiv.innerText = "translated  " + txtInput.value + "  To : bababbababababababa ";

    var inputText = txtInput.value;

    fetch(getTranslationURL(inputText))
        .then(response => response.json())
        .then(json => console.log(json.main.temp))

};

btnTranslate.addEventListener("click", clickHandler)