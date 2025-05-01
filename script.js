function displayPoem(response) {
    new Typewriter("#poem", {
        strings: response.data.answer,
        autoStart: true,
        delay: 1,
        cursor: "",
      });
}

function generatePoem(event) {
    event.preventDefault();  

let instructionsInput = document.querySelector("#user-instructions")
let prompt = `Generate a poem about ${instructionsInput.value}.`;
let context = "You are a great poet and love to write short but beautiful poems. Please make a 4 short paragraph poem."
let apiKey = "df3t9495b3b3410e50b1aoab7d1cc149";
let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

let poemElement = document.querySelector("#poem")
poemElement.innerHTML = ".."

axios.get(apiUrl).then(displayPoem);
}

let poemFormElement = document.querySelector(".poem-generator-form");
poemFormElement.addEventListener("submit", generatePoem);