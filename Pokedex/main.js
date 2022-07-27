// https://pokebuildapi.fr/api/v1/pokemon
let pokeData = [];
let dataBase;

async function pokeFetch() {
  await fetch("https://pokebuildapi.fr/api/v1/pokemon")
    .then((res) => res.json())
    .then((data) => (pokeData = data));

  console.log(pokeData);
  dataBase = pokeData;
  listPokedex();
  displayFetch();
}

pokeFetch();

function displayFetch() {
  randomizer();

  pokeName.textContent = pokeData.name;
  pokeImg.src = pokeData.image;
  pokeId.textContent = "#" + pokeData.pokedexId;
  pokeNameRadar.textContent = pokeData.name;

  if (pokeData.apiTypes.length > 1) {
    pokeType.src = pokeData.apiTypes[0].image;
    pokeType2.src = pokeData.apiTypes[1].image;
    pokeType2.style.display = "";
  } else {
    pokeType.src = pokeData.apiTypes[0].image;
    pokeType2.style.display = "none";
  }

  if (pokeData.apiPreEvolution != "none") {
    pokePreEvol.textContent = pokeData.apiPreEvolution.name;
    pokePreEvolImg.src =
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/" +
      pokeData.apiPreEvolution.pokedexIdd +
      ".png";
    pokePreEvolImg.style.display = "";
  } else {
    pokePreEvol.textContent = "";
    pokePreEvolImg.style.display = "none";
  }

  if (pokeData.apiEvolutions.length == 1) {
    pokeEvol.textContent = pokeData.apiEvolutions[0].name;
    pokeEvolImg.src =
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/" +
      pokeData.apiEvolutions[0].pokedexId +
      ".png";
    pokeEvolImg.style.display = "";
  } else {
    pokeEvol.textContent = "";
    pokeEvolImg.style.display = "none";
  }

  pokedex.style.background =
    "url('img/bg-" + pokeData.apiTypes[0].name + ".png') no-repeat top/cover";
  loadEvent();
}

function openTab(evt, tabName) {
  var i, tabContent, tabLinks;
  tabContent = document.getElementsByClassName("tab");
  for (i = 0; i < tabContent.length; i++) {
    tabContent[i].style.display = "none";
  }

  tabLinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tabLinks.length; i++) {
    tabLinks[i].className = tabLinks[i].className.replace(" active", "");
  }

  document.getElementById(tabName).style.display = "";
  evt.currentTarget.className += " active";

  if (pokedex.style.display == "none") {
    pokeList.style.display = "block";
  } else {
    document.getElementById(tabName).style.display = "";
  }
}

const loader = document.querySelector(".loader-wrapper");

function loadEvent() {
  if (pokeData.apiEvolutions.length == 1) {
    pokeEvolImg.addEventListener("load", () => {
      loader.style.display = "none";
    });
  } else if (pokeData.apiPreEvolution != "none") {
    pokePreEvolImg.addEventListener("load", () => {
      loader.style.display = "none";
    });
  } else {
    pokeImg.addEventListener("load", () => {
      loader.style.display = "none";
    });
  }
}

function listPokedex() {
  const containerCards = document.getElementById("container_cards");

  containerCards.innerHTML = pokeData
    .map(
      (pokeCard) =>
        `
      <div class="card">
        <img src=${pokeCard.image} alt=${pokeCard.name} id="card_poke">
        <h2>${pokeCard.name}</h2>
        <img src="img/bg-${pokeCard.apiTypes[0].name}.png" alt=${pokeCard.name} id="card_bg">

      </div>

      `
    )

    .join("");
}

function randomizer() {
  pokeData = pokeData[Math.floor(Math.random() * pokeData.length)];
}

up.addEventListener("click", () => {
  pokeData = dataBase;
  displayFetch();
});
