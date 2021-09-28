const pierre = "pierre";
const feuille = "feuille";
const ciseaux = "ciseaux";
const bot = document.querySelector(".bot");
const playresult = document.querySelector(".playresult");
const joueur = document.querySelector(".j");
const ordinateur = document.querySelector(".o");
let game = document.getElementsByClassName("play");
let result = Boolean | null;
let i = 1;
let j = 1;

function getBotValue (max) {
  return Math.floor(Math.random() * max);
};

function play (){
  getBotValue(3);
  if (getBotValue(3) === 0) {
    botValue = pierre;
  }else if (getBotValue(3) === 1) {
    botValue = feuille;
  } else {
    botValue = ciseaux;
  }
  return botValue;
};

function score () {
  if (result === true){
    joueur.innerHTML = [i++];
  } else if (result === false) {
    ordinateur.innerHTML = [j++];
  }
};

function resultat () {
  play();
  if((botValue === pierre && player === ciseaux) | (botValue === feuille && player === pierre) | (botValue === ciseaux && player === feuille)){
    result = false;
    playResult = ("perdu"); 
  } else if ((botValue === ciseaux && player === pierre) | (botValue === pierre && player === feuille) | (botValue === feuille && player === ciseaux)){
    result = true;
    playResult = ("gagner");
  } else {
    result = null;
    playResult = ("égalité");
  }
  bot.innerHTML = "<img src=img/" + botValue + ".png class=img>";
  playresult.innerHTML = "<p class=" + result + ">" + playResult + "</p>";
  score();
  return result;
};

for (let i = 0; i < 3; i++) {
  game[i].addEventListener("click", () => {
    if (i===0) {
      player = pierre;
    }else if (i===1) {
      player = feuille;
    } else {
      player = ciseaux;
    }
    resultat();
  });
}