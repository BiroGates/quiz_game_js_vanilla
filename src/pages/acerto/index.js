let acertos = localStorage.getItem("points");
let quantidade = localStorage.getItem("questions");

let x = document.getElementById("text");
x.innerHTML = `VOCÊ ACERTOU ${acertos} DE ${quantidade} PERGUNTAS`;


function recomecar() {
  localStorage.points = 0;
  localStorage.currentQuestion = 0;
}