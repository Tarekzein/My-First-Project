const nav = document.querySelector(".nav-menu i");

nav.addEventListener("click", function () {
  
  const icon = document.querySelector(".nav-menu i");
  const list = document.querySelector(".nav-menu ul");
  if (list.style.display === "none") {
    list.style.display = "block";
    icon.className = "fas fa-times";
  }
  else {
    list.style.display = "none";
    icon.className = "fas fa-align-right"
  }
});

