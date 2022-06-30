const btnToggle = document.querySelector(".toggle-btn");
const btnClicked = document.querySelector(".btn-clicked");
const body = document.querySelector("body");

const sidebar = document.querySelector(".right-nav");

btnToggle.addEventListener("click", () => {
  on = btnToggle.classList.toggle("btn-clicked");

  if (on == true) {
    sidebar.style.right = "0px";
    body.style.overflow = "hidden";
    sidebar.style.width = 100 + "%";
    sidebar.style.height = 100 + "vh";
  } else if (on == false) {
    sidebar.style.right = "-1200px";
    body.style.overflow = "";
    sidebar.style.height = "";
    sidebar.style.width = "";
  }

  console.log(on);
});

sidebar.addEventListener("click", () => {
  on = btnToggle.classList.toggle("btn-clicked");

  if (on == false) {
    sidebar.style.right = "-1200px";
    body.style.overflow = "";
    sidebar.style.height = "";
    sidebar.style.width = "";
  }
});
