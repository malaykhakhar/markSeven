var inputText = document.querySelector("#inputArea");
var btnTranslate = document.querySelector("#btn-translate");
var output = document.querySelector("#outputArea");

var URL = "https://api.funtranslations.com/translate/ferb-latin.json";

function constructURL(text) {
  return (URL + "?text=" + text);
}

function clickEventHandler() {
  fetch(constructURL(inputText.value))
    .then(response => response.json())
    .then(json => {
      output.innerHTML = json.contents.translated;
    })
}

btnTranslate.addEventListener("click", clickEventHandler);