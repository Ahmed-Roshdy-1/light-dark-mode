const toggleSwich = document.querySelector('input[type="Checkbox"]');
const nav = document.getElementById("nav");
const toggleIcon = document.getElementById("toggle-icon");
const image1 = document.getElementById("image1");
const image2 = document.getElementById("image2");
const image3 = document.getElementById("image3");
const textBox = document.getElementById("text-box");

function isDakeMode(isDark) {
  nav.style.background = isDark ? "rgb(0 0 0 / 50%)" : "rgb(255 255 255/ 50%)";
  textBox.style.backgroundColor = isDark
    ? "rgb(255 255 255 / 50%)"
    : "rgb(0 0 0 / 50%)";
  toggleIcon.children[0].textContent = isDark ? "Dark Mode" : "Light Mode";
  isDark
    ? toggleIcon.children[1].classList.replace("fa-sun", "fa-moon")
    : toggleIcon.children[1].classList.add("fa-moon", "fa-sun");
  isDark ? imageMode("dark") : imageMode("light");
}

function imageMode(modetype) {
  image1.src = `SVG/undraw_proud_coder_${modetype}.svg`;
  image2.src = `SVG/undraw_feeling_proud_${modetype}.svg`;
  image3.src = `SVG/undraw_conceptual_idea_${modetype}.svg`;
}

// Dark Mode Styles
// function darkMode() {
//   nav.style.backgroundColor = "rgb(0 0 0 / 50%)";
//   textBox.style.backgroundColor = "rgb(255 255 255 / 50%)";
//   toggleIcon.children[0].textContent = "Dark Mode";
//   toggleIcon.children[1].classList.remove("fa-sun");
//   toggleIcon.children[1].classList.add("fa-moon");
//   image1.src = "SVG/undraw_proud_coder_dark.svg";
//   image2.src = "SVG/undraw_feeling_proud_dark.svg";
//   image3.src = "SVG/undraw_conceptual_idea_dark.svg";
// }

// light Mode Styles
// function lightMode() {
//   toggleIcon.children[1].classList.remove("fa-moon");
//   nav.style.backgroundColor = "rgb(255 255 255/ 50%)";
//   textBox.style.backgroundColor = "rgb(0 0 0 / 50%)";
//   toggleIcon.children[0].textContent = "Light Mode";
//   toggleIcon.children[1].classList.add("fa-sun");
//   image1.src = "SVG/undraw_proud_coder_light.svg";
//   image2.src = "SVG/undraw_feeling_proud_light.svg";
//   image3.src = "SVG/undraw_conceptual_idea_light.svg";
// }

// Switch theme Dynamically
function switchTheme(event) {
  if (event.target.checked) {
    document.documentElement.setAttribute("data-theme", "dark");
    localStorage.setItem("theme", "dark");
    isDakeMode(true);
  } else {
    document.documentElement.setAttribute("data-theme", "light");
    localStorage.setItem("theme", "light");
    isDakeMode(false);
  }
}

// Event Listener
toggleSwich.addEventListener("change", switchTheme);

// check Local Storage for theme
const currentTheme = localStorage.getItem("theme");
if (currentTheme) {
  document.documentElement.setAttribute("data-theme", currentTheme);
  if (currentTheme === "dark") {
    toggleSwich.checked = true;
    isDakeMode(true);
  }
}
