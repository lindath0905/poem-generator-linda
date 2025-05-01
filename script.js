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

let instructionsInput = document.querySelector("#user-instructions");
let prompt = `Generate a 20 word long poem about ${instructionsInput.value}.`;
let context = "Please make it in 4 lines."
let apiKey = "df3t9495b3b3410e50b1aoab7d1cc149";
let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

let poemElement = document.querySelector("#poem");
poemElement.classList.remove("hidden")
poemElement.innerHTML = `Generating poem about ${instructionsInput.value}..`;

axios.get(apiUrl).then(displayPoem);
}

let poemFormElement = document.querySelector("#poem-generator-form");
poemFormElement.addEventListener("submit", generatePoem);