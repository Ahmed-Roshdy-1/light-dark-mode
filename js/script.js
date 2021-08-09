const toggleSwich = document.querySelector('input[type="Checkbox"]');

// Switch theme Dynamically
function switchTheme(event) {
  if (event.target.checked) {
    document.documentElement.setAttribute("data-theme", "dark");
  } else {
    document.documentElement.setAttribute("data-theme", "light");
  }
}

// Event Listener
toggleSwich.addEventListener("change", switchTheme);
