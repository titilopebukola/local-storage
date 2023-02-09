// function to set the theme of our website
function setIheme() {
  if (
    localStorage.getItem("theme") === "light" ||
    localStorage.getItem("theme") === null
  ) {
    localStorage.setItem("theme", "dark");
    document.body.classList.add("dark");
  } else {
    localStorage.setItem("theme", "light");
    document.body.classList.remove("dark");
  }
}

const themeBtn = document.getElementById("theme-btn");
themeBtn.addEventListener("click", setIheme);

// function to get the current of our website
function getTheme() {
  if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark");
  }
}
getTheme();

// add new javascript to your app
