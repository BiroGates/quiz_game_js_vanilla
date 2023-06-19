let questionsData = [
  {
    desc: "Qual o nome da personagem que tem um cabelo rosa e é meio maluquinha por ciencia ?",
    alternatives: [
      {
        value: "Princesa Jujuba",
        isCorrect: true
      },
      {
        value: "Princesa Caroço",
        isCorrect: false
      },
      {
        value: "Princesa Gelada",
        isCorrect: false
      },
      {
        value: "Princesa Trapo",
        isCorrect: false
      },
      {
        value: "Princesa Fogo",
        isCorrect: false
      }
    ] 
  },
  {
    desc: "Qual o adjetivo dado ao finn",
    alternatives: [
      {
        value: "O humano",
        isCorrect: true
      },
      {
        value: "Aventureiro",
        isCorrect: false
      },
      {
        value: "O ferroz",
        isCorrect: false
      },
      {
        value: "O espadachin",
        isCorrect: false
      },
      {
        value: "O bom",
        isCorrect: false
      }
    ] 
  },
  {
    desc: "Quem são os personagens principais de Hora de Aventura?",
    alternatives: [
      {
        value: "princesa jujuba e finn ",
        isCorrect: false
      },
      {
        value: "finn e jake ",
        isCorrect: true
      },
      {
        value: "jake e BMO",
        isCorrect: false
      },
      {
        value: "marceline e BMO",
        isCorrect: false
      },
      {
        value: "marceline e BMO",
        isCorrect: false
      }
    ] 
  },
  {
    desc: "Quantas temporadas tem Hora de Aventura?",
    alternatives: [
      {
        value: "10",
        isCorrect: true
      },
      {
        value: "7",
        isCorrect: false
      },
      {
        value: "12",
        isCorrect: false
      },
      {
        value: "5",
        isCorrect: false
      },
      {
        value: "4",
        isCorrect: false
      }
    ] 
  },
  {
    desc: "Qual é o nome do episódio final da série Hora de Aventura?",
    alternatives: [
      {
        value: "Fionna e Cake",
        isCorrect: false
      },
      {
        value: "O Lich",
        isCorrect: false
      },
      {
        value: "Masmorra",
        isCorrect: false
      },
      {
        value: "Fuga da Cidadela",
        isCorrect: false
      },
      {
        value: "Obsidian",
        isCorrect: true
      }
    ] 
  },
  {
    desc: "Quem é o pai de Finn em Hora de Aventura?",
    alternatives: [
      {
        value: "Jake",
        isCorrect: false
      },
      {
        value: "Martin",
        isCorrect: true
      },
      {
        value: "Rei Gelado",
        isCorrect: false
      },
      {
        value: "Lich",
        isCorrect: false
      },
      {
        value: "Nasceu da terra",
        isCorrect: false
      }
    ] 
  },
  {
    desc: "Quem é a Princesa de Fogo em Hora de Aventura?",
    alternatives: [
      {
        value: "Jujuba",
        isCorrect: false
      },
      {
        value: "Marceline",
        isCorrect: false
      },
      {
        value: "Phoebe",
        isCorrect: true
      },
      {
        value: "Fionna",
        isCorrect: false
      },
      {
        value: "Shoko",
        isCorrect: false
      }
    ] 
  },
  {
    desc: "Qual é o nome do reino onde Finn e Jake vivem?",
    alternatives: [
      {
        value: "Nárnia",
        isCorrect: false
      },
      {
        value: "Wakanda",
        isCorrect: false
      },
      {
        value: "Terra do Ooo",
        isCorrect: true
      },
      {
        value: "Mordor",
        isCorrect: false
      },
      {
        value: "Hogwarts",
        isCorrect: false
      }
    ] 
  },
  {
    desc: "Quem é o principal antagonista da série?",
    alternatives: [
      {
        value: "lich",
        isCorrect: false
      },
      {
        value: "Princesa de Fogo",
        isCorrect: false
      },
      {
        value: "Gunter",
        isCorrect: false
      },
      {
        value: "Huson Abadeer",
        isCorrect: false
      },
      {
        value: "Rei Gelado",
        isCorrect: true
      }
    ] 
  },
  {
    desc: "Do que o finn tem mais medo?",
    alternatives: [
      {
        value: "fogo",
        isCorrect: false
      },
      {
        value: "insetos",
        isCorrect: false
      },
      {
        value: "o mar",
        isCorrect: true
      },
      {
        value: "lava",
        isCorrect: false
      },
      {
        value: "escuro",
        isCorrect: false
      }
    ] 
  },
  
]
let respondeu = false;
localStorage.setItem("questions", questionsData.length);

function setup() {
  if(!localStorage.points) {
    localStorage.points = 0;
    localStorage.currentQuestion = 0
  }
  
  
  
  let desc = document.getElementById("desc");
  desc.innerHTML = questionsData[localStorage.currentQuestion].desc.toUpperCase();
  
  let alt = document.getElementsByClassName("box"); 
  for(let i = 0; i < alt.length; i++) {
    alt[i].innerHTML = questionsData[localStorage.currentQuestion].alternatives[i].value;
    alt[i].value = questionsData[localStorage.currentQuestion].alternatives[i].isCorrect;
  }

}

function responder(e) {  
  if(Boolean(e.target.value) && !respondeu)
    localStorage.points = Number(localStorage.points) + 1;

  
  

  let desc = document.getElementById("desc");
  desc.innerHTML = questionsData[localStorage.currentQuestion].desc.toUpperCase();

  let alt = document.getElementsByClassName("box"); 
  for(let i = 0; i < alt.length; i++) {
    alt[i].innerHTML = questionsData[localStorage.currentQuestion].alternatives[i].value;
    alt[i].value = questionsData[localStorage.currentQuestion].alternatives[i].isCorrect;
    alt[i].classList.add(Boolean(alt[i].value) ? 'acerto' : 'erro');
    
  }  

  respondeu = true;

  if(respondeu) {
    let x = document.getElementById("btn");
    x.classList.remove("hide");
    x.classList.add("show");
    
  }else {
    let x = document.getElementById("btn");
    x.classList.remove("show");
    x.classList.add("hide");
  
  }

}


function avancar() {
  respondeu = false;
  
  
  console.log(localStorage.currentQuestion + 1);
  console.log(localStorage.questions - 1);
  
  if(Number(localStorage.currentQuestion) + 1 > Number(localStorage.questions) - 1) {
    window.location.href = "../acerto/index.html";
  }

  localStorage.currentQuestion = Number(localStorage.currentQuestion) + 1;

  let desc = document.getElementById("desc");
  desc.innerHTML = questionsData[localStorage.currentQuestion].desc.toUpperCase();

  let alt = document.getElementsByClassName("box"); 
  for(let i = 0; i < alt.length; i++) {
    alt[i].classList.remove(Boolean(alt[i].value) ? 'acerto' : 'erro');
    alt[i].innerHTML = questionsData[localStorage.currentQuestion].alternatives[i].value;
    alt[i].value = questionsData[localStorage.currentQuestion].alternatives[i].isCorrect;
  }
  
  if(respondeu) {
    let x = document.getElementById("btn");
    x.classList.remove("hide");
    x.classList.add("show");
    
  }else {
    let x = document.getElementById("btn");
    x.classList.remove("show");
    x.classList.add("hide");
  
  }

}