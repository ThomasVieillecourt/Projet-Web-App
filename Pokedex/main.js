// https://pokebuildapi.fr/api/v1/pokemon

fetch("https://pokebuildapi.fr/api/v1/pokemon")
  .then((res) => res.json())
  .then((data) => {
    const pokeData = data[Math.floor(Math.random() * data.length)];
    console.log(data);
    console.log(pokeData);

    pokeName.textContent = pokeData.name;
    pokeImg.src = pokeData.image;
    pokeId.textContent = "#" + pokeData.pokedexId;
    pokeNameRadar.textContent = pokeData.name;

    if (pokeData.apiTypes.length > 1) {
      pokeType.src = pokeData.apiTypes[0].image;
      pokeType2.src = pokeData.apiTypes[1].image;
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
    } else {
      pokeEvol.textContent = "";
      pokeEvolImg.style.display = "none";
    }
  });

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

  document.getElementById(tabName).style.display = "block";
  evt.currentTarget.className += " active";
}
