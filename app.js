
var btnTranslate = document.querySelector("#btn-translate");
var txtInput = document.querySelector("#txt-input");
var outputDiv = document.querySelector("#output");

// var serverURL ="https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json"

var serverURL ="https://api.funtranslations.com/translate/dolan.json"

function getTranslationURL(text) {
    return serverURL  + "?" + "text=" + text 
}

function errorHandler(error){
    console.log("error occured",error)
    alert("something wrong with the server kindly try after some time")
}

function clickHandler()
{
    // outputDiv.innerText ="jkhdkwadnhld " + txtInput.value
    var inputText = txtInput.value;
    fetch(getTranslationURL(inputText))
    .then(response=> response.json())
    .then(json => {
        var translatedText = json.contents.translated;
        outputDiv.innerText = translatedText;
    })

        .catch(errorHandler)
    
};


btnTranslate.addEventListener("click", clickHandler);
