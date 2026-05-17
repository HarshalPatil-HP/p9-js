
document.addEventListener("DOMContentLoaded", () => {
    let apiKey = "qa_sk_e8a48865896cf50a16b26f7587d74520f4b26851"
    let container = document.querySelector(".container");
    let quiz = document.querySelector(".quiz");
    let question = document.querySelector(".Question");
    let scoreSection = document.querySelector(".score");
    let yourScore = document.querySelector(".YourScore");
    let restartBtn = document.querySelector(".Restart");
    let optionsContainer = document.querySelector(".options");
    let next = document.querySelector(".next");

    fetch("https://quizapi.io/api/v1/questions", {
        method: "GET",
        headers: {
            "X-Api-Key": apiKey
        }
    })
    .then(res=>res.json())
    .then(res=> console.log(res))
    .catch(err => console.log(err));

})

