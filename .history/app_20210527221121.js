var btnTranslate = document.querySelector("#btn-translate");
var txtInput = document.querySelector("#txt-input");
var outputDiv = document.querySelector('#output')
var serverURL = "https://api.openweathermap.org/data/2.5/weather?q="
var key = "&appid=49257f6591cfc3ed8daf0b5970d519cb"

function getTranslationURL(text) {
    return serverURL + text + key
}

function errorHandler(error) {
    console.log("error occured", error)
    alert("something went wrong  :  " + error)
}

function clickHandler() {
    // outputDiv.innerText = "translated  " + txtInput.value + "  To : bababbababababababa ";

    var inputText = txtInput.value;

    fetch(getTranslationURL(inputText))
        .then(response => response.json())
        .then(json => {
            var translatedText = "Country : " + json['sys']['country'] + " | tempreature : " + json['main']['temp'] + " | weather : " +  json['weather'][0]['description'] + " | longitude : " + json.coord['lon'] + " | latitude : " + json['coord']['lat'] + " | wind speed : " + json['wind']['speed'] + " | Wind direction, degrees : " + json['wind']['deg'];
            outputDiv.innerText = translatedText;
            console.log()})
    };


btnTranslate.addEventListener("click", clickHandler)