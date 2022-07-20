// https://pokebuildapi.fr/api/v1/pokemon

fetch("https://pokebuildapi.fr/api/v1/pokemon")
  .then((res) => res.json())
  .then((data) => {
    const pokeData = data[Math.floor(Math.random() * data.length)];
    console.log(data);
    console.log(pokeData);

    pokeName.textContent = pokeData.name;
    pokeImg.src = pokeData.image;
    pokeId.textContent = pokeData.pokedexId;

    if (pokeData.apiTypes.length > 1) {
      pokeType.src = pokeData.apiTypes[0].image;
      pokeType2.src = pokeData.apiTypes[1].image;
    } else {
      pokeType.src = pokeData.apiTypes[0].image;
      pokeType2.style.display = "none";
    }

    if (pokeData.apiPreEvolution != "none") {
      pokePreEvol.textContent =
        "Sous évolution : " + pokeData.apiPreEvolution.name;
      pokePreEvolImg.src =
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/" +
        pokeData.apiPreEvolution.pokedexIdd +
        ".png";
    } else {
      pokePreEvol.textContent = "";
      pokePreEvolImg.style.display = "none";
    }

    if (pokeData.apiEvolutions.length == 1) {
      pokeEvol.textContent = "Evolution : " + pokeData.apiEvolutions[0].name;
      pokeEvolImg.src =
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/" +
        pokeData.apiEvolutions[0].pokedexId +
        ".png";
    } else {
      pokeEvol.textContent = "";
      pokeEvolImg.style.display = "none";
    }
  });
