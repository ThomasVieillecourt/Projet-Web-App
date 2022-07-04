const btnToggle = document.querySelector(".toggle-btn");
const btnClicked = document.querySelector(".btn-clicked");
const body = document.querySelector("body");

const validForm = document.getElementById("rdv-validation");

// MENU BURGER //

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

// --------------- //

// REGEX FORM //
const mail = document.getElementById("email");
const phone = document.getElementById("telephone");
const prenom = document.getElementById("forname");
const famille = document.getElementById("name");
const heure = document.getElementById("hours");
const containerCheckbox = document.querySelector(".checkbox-container");
const alertCGU = document.querySelector("#alert");

const mailFormat = /^[\w\._-]+@[\w-/]+\.[a-z]{2,4}$/i;
const phoneFormat = /^((\+)33|0|0033)[1-9](\d{2}){4}$/g;

// DATE//
const today = new Date().toISOString().split("T")[0];
date.value = today;
date.min = today;

const datePicker = document.getElementById("date");

datePicker.addEventListener("change", function (e) {
  var day = new Date(this.value).getUTCDay();
  if ([6, 0].includes(day)) {
    e.target.setCustomValidity(
      "Veuiller séléctionner un jour de la semaine (hors week-end)"
    );
  } else {
    e.target.setCustomValidity("");
  }
});

///

function validMail() {
  if (mail.value.match(mailFormat)) {
    return true;
  } else if (mail.value == "") {
    mail.attributes["required"];
    mail.style.border = "2px solid red";
    mail.setCustomValidity("Merci de renseigner un mail");
  } else {
    mail.style.border = "2px solid red";
    mail.setCustomValidity("Merci de renseigner un mail valide");
  }
}

function validPhone() {
  if (phone.value.match(phoneFormat)) {
    return true;
  } else if (phone.value == "") {
    phone.attributes["required"];
    phone.style.border = "2px solid red";
    phone.setCustomValidity("Merci de renseigner un numéro de téléphone");
  } else {
    phone.style.border = "2px solid red";
    phone.setCustomValidity(
      "Merci de renseigner un numéro de téléphone valide"
    );
  }
}

function check() {
  const cguBox = document.getElementById("CGU");
  const dataBox = document.getElementById("data");

  if (cguBox.checked && dataBox.checked) {
    return true;
  } else {
    return false;
  }
}

function valid() {
  if (validMail() === true && validPhone() === true && check() === true) {
    console.log(
      " Le rendez-vous pour " +
        prenom.value +
        famille.value +
        " est validé pour le " +
        date.value +
        " à " +
        heure.value +
        " heure."
    );
  }
}

mail.addEventListener("input", (e) => {
  if (e.target.value.match(mailFormat)) {
    mail.setCustomValidity("");
    mail.style.border = "";
    validMail === true;
  } else if (e.target.value == "") {
    mail.style.border = "2px solid red";
    mail.setCustomValidity("Merci de renseigner un mail");
  } else {
    mail.style.border = "2px solid red";
    mail.setCustomValidity("Merci de renseigner un mail valide");
  }
});

phone.addEventListener("input", (e) => {
  if (e.target.value.match(phoneFormat)) {
    phone.setCustomValidity("");
    phone.style.border = "";
    validPhone === true;
  } else if (e.target.value == "") {
    phone.style.border = "2px solid red";
    phone.setCustomValidity("Merci de renseigner un numéro de téléphone");
  } else {
    phone.style.border = "2px solid red";
    phone.setCustomValidity("Merci de renseigner un numéro de téléphone");
  }
});

formRDV.addEventListener("submit", (e) => {
  e.preventDefault();
  valid();

  if (check() != true) {
    alertCGU.style.display = "contents";
  } else if (check() === true) {
    alertCGU.style.display = "none";
  }
});
