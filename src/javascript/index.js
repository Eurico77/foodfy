const toggleSwitch = document.querySelector(
  '.theme-switch input[type="checkbox"]'
);

function switchImage(e) {
  if (e.target.checked) {
    document.getElementById("logo").src = "../../assets/Component 2Foodfy.svg";
    console.log("estou chegando");
  } else {
    document.getElementById("logo").src = "../../assets/Component 3Foodfy.svg";
    console.log("tambem estou chegando");
  }
}

toggleSwitch.addEventListener("change", switchImage, false);

function switchTheme(e) {
  if (e.target.checked) {
    document.documentElement.setAttribute("data-theme", "dark");
  } else {
    document.documentElement.setAttribute("data-theme", "light");
  }
}

toggleSwitch.addEventListener("change", switchTheme, false);

function switchTheme(e) {
  if (e.target.checked) {
    document.documentElement.setAttribute("data-theme", "dark");
    localStorage.setItem("theme", "dark"); //add this
  } else {
    document.documentElement.setAttribute("data-theme", "light");
    localStorage.setItem("theme", "light"); //add this
  }
}

const currentTheme = localStorage.getItem("theme")
  ? localStorage.getItem("theme")
  : null;

if (currentTheme) {
  document.documentElement.setAttribute("data-theme", currentTheme);

  if (currentTheme === "dark") {
    toggleSwitch.checked = true;
  }
}

const modalOverlay = document.querySelector(".modal-overlay");
const cards = document.querySelectorAll(".card");
const closeModal = document.querySelector(".close-modal");

for (card of cards) {
  card.addEventListener("click", function () {
    modalOverlay.classList.add("active");
  });
}
