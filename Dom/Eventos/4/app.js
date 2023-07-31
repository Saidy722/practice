//Oculta un elemento con ID oculto al hacer clic en un botón con ID boton-oculto.

const disappear = document.getElementById("disappear");
const button = document.getElementById("button");
const buttonB = document.getElementById("buttonB");

button.addEventListener("click", function () {

  if (disappear.classList.contains("show")){
    disappear.classList.remove("show")
    disappear.classList.add("hidden")
  }else {
    disappear.classList.remove("hidden")
    disappear.classList.add("show")
  }


});
