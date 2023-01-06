// Objet Interface game
// Propriétés score / choicePlayer / Choice Computer
// Fonctionnalités : Start / End / Win / Loose / logique jeu / Next round

const main = document.querySelector(".game-container__content");

const choicePlayer = document.querySelector("#choice_player");
const choicePc = document.querySelector("#choice_pc");

// Variables animation manche
const iframeLoose = document.getElementById("iframe_L");
const iframeWin = document.getElementById("iframe_W");

// Variables barre HP
let hpPlayer = document.getElementById("PV1");
let hpPc = document.getElementById("PV2");

let width;
let newWidth;
width = 240;

let widthPlayer;
let newWidthPlayer;
widthPlayer = 240;

const textEnd = document.getElementById("endGame_text");

// Variables score

const scorePlayer = document.getElementById("score_player");
let scorePlayerCount = 0;

const scorePc = document.getElementById("score_computer");
let scorePcCount = 0;

let game = {
  rock: {
    rock: "draw",
    scissors: "win",
    paper: "loose",
  },
  scissors: {
    rock: "loose",
    scissors: "draw",
    paper: "win",
  },
  paper: {
    rock: "win",
    scissors: "loose",
    paper: "draw",
  },
};

// Fonction principale de jeu, chaque manche

function playing() {
  let choiceArr = ["rock", "paper", "scissors"];
  let numRandom = Math.floor(Math.random() * 3);

  let pcChoice = choiceArr[numRandom];
  choicePc.src = "img/" + pcChoice + ".png";
  console.log(pcChoice);

  switch (game[playerChoise][pcChoice]) {
    case "win":
      console.log("You win");
      scorePlayerCount++;
      scorePlayer.textContent = scorePlayerCount;
      fightingLoose();
      minusPc();
      break;
    case "loose":
      console.log("You loose");
      scorePcCount++;
      scorePc.textContent = scorePcCount;
      minusPlayer();
      fightingWin();
      break;
    case "draw":
      console.log("Egalité");
      break;
  }
  endGame();
}

document.querySelectorAll(".choices-btn__sign").forEach((btn) => {
  btn.addEventListener("click", (e) => {
    playerChoise = e.target.id;
    console.log(playerChoise);
    playing();
    choicePlayer.src = "img/" + e.target.id + ".png";
  });
});

// Display global

const vue = {
  lobby: function () {
    reset();
  },

  victory: function () {
    setTimeout(() => {
      document.getElementById("modal").style.display = "block";
      textEnd.textContent = "Tu as gagné !";
    }, 600);

    reboot.addEventListener("click", () => vue.lobby());
  },

  loose: function () {
    setTimeout(() => {
      document.getElementById("modal").style.display = "block";
      textEnd.textContent = "Tu as perdu !";
    }, 600);

    reboot.addEventListener("click", () => vue.lobby());
  },
};

// Reset des données à chaque manche

function reset() {
  scorePcCount = 0;
  scorePlayerCount = 0;
  scorePc.textContent = 0;
  scorePlayer.textContent = 0;
  choicePlayer.src = "";
  choicePc.src = "";
  document.getElementById("modal").style.display = "none";

  playerChoise = undefined;
  pcChoice = undefined;

  width = 240;
  hpPc.style.width = width + "px";
  newWidth = 240;

  widthPlayer = 240;
  hpPlayer.style.width = widthPlayer + "px";
  newWidthPlayer = 240;
}

function endGame() {
  if (scorePlayerCount >= 3) {
    console.log("vous avez gagné la partie");
    vue.victory();
  } else if (scorePcCount >= 3) {
    console.log("Vous avez perdu");
    vue.loose();
  }
}

// Animation coup a chaque victoire !

function fightingLoose() {
  iframeLoose.src = "img/Z92e.gif";

  setTimeout(() => {
    iframeLoose.src = "";
  }, 800);
}

function fightingWin() {
  iframeWin.src = "img/ZVxa.gif";

  setTimeout(() => {
    iframeWin.src = "";
  }, 800);
}

// Barre de pv 100% - 66 % 33% 0%

function minusPc() {
  newWidth = width - 80; // 160 - 80 - 0

  hpPc.style.width = newWidth + "px";
  width = newWidth;
}

function minusPlayer() {
  newWidthPlayer = widthPlayer - 80; // 160 - 80 - 0

  hpPlayer.style.width = newWidthPlayer + "px";
  widthPlayer = newWidthPlayer;
}
