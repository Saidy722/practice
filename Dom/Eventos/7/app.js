

const menu = document.getElementById("menu");

window.addEventListener("scroll", function () {
  if (window.scrollY > 200) {
    menu.style.backgroundColor = "#F5DEB3";
  } else {
    menu.style.backgroundColor = "#5A05AA";
  }

});


