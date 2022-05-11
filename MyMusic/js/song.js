// Like //

let like = 1;
let opacity = ['0', '1'];
const checked = document.querySelector("#icon__heart__check");



checked.addEventListener("click", () => {
    checked.style.opacity = opacity[like];
    checked.style.transition = "0.5s";

    like = like >= opacity.length - 1 ? 0 : like + 1; /// si like est supérieur ou égale à opacité -1 alors like = 0 sinon like = 1

})


const btnLyrics = document.querySelector(".paroles");
const lyrics = document.querySelector(".lyrics");
const btnDown = document.querySelector(".btn__down");
const textLyrics = document.querySelector(".lyrics__text")


btnLyrics.addEventListener("click", () => {
    lyrics.style.height = "104vh";
    btnDown.style.height = "6px";
    textLyrics.style.display = "block";
    textLyrics.style.opacity = "1";
    lyrics.style.transition = "1.4s";
})



btnDown.addEventListener("click", () => {
    lyrics.style.height = "0";
    textLyrics.style.opacity = "0";
    textLyrics.style.transition = "1.4s";
    lyrics.style.transition = "1.4s";
})