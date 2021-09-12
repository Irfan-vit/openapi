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
    var inputText = txtInput.value;

    fetch(getTranslationURL(inputText))
    // fetch("https://api.cannotfetchapi.com/")
        .then((response)=>{
            if(!response.ok){
                if(response.status === parseInt(404)){
                    console.log(response.status+": in 404");
                    console.log(response.statusText);
                    throw Error(`An ${response.status} error occured - ${response.statusText}`);
                } else if(response.status === 401){
                    console.log(response.status+": in 401");
                    console.log(response.statusText);
                    throw Error(`An ${response.status} error occured - ${response.statusText}`);
                } else {
                    console.log(response.status+": in all other error status");
                    console.log(response.statusText);
                    throw Error(`An ${response.status} error occured - ${response.statusText}`);
                }
            }
            console.log(response.status+" "+response.statusText);
            return response.json();
        })
        .then(json => {
            var translatedText = "Country : " + json['sys']['country'] + " | tempreature : " + json['main']['temp'] + " | weather : " +  json['weather'][0]['description'] + " | longitude : " + json['coord']['lon'] + " | latitude : " + json['coord']['lat'] + " | wind speed : " + json['wind']['speed'] + " | Wind direction, degrees : " + json['wind']['deg'];
            outputDiv.innerText = translatedText.toUpperCase();
        })
        .catch((error) => {
            outputDiv.innerText = `${error.message}`;
        });
};


btnTranslate.addEventListener("click", clickHandler)