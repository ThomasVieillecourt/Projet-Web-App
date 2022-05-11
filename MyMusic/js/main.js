// Variables //


// Recherche //

const maRecherche = document.querySelector(".nav__searchbar");
const buttonSearch = document.querySelector("#btn_search");



buttonSearch.addEventListener("click", () => {
    if (maRecherche.value === "Doja Cat")
        window.open("http://127.0.0.1:5500/Websites/MyMusic/song html/DojaCatSong.html", "_self");
    else if (maRecherche.value === "Elley Duhe")
        window.open("http://127.0.0.1:5500/Websites/MyMusic/song html/ElleyDuheSong.html", "_self");
    else
        alert('Aucun résultat');
})

