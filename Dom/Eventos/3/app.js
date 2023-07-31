//Cambia el color de fondo de un elemento con ID cambio-color al hacer clic en un botón con ID boton-color. evento

const element = document.getElementById('element');
const button = document.getElementById('button');



button.addEventListener('click', function() {

    if (element.classList.contains("colorOne")) {
        element.classList.remove("colorOne");
        element.classList.add("colorTwo");

      } else {
        element.classList.remove("colorTwo");
        element.classList.add("colorOne");

    }    
}
)



