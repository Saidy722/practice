//Añade un evento submit a un formulario y muestra una alerta con el contenido del campo nombre al enviar el formulario. evento

const boton = document.getElementById("boton");
const texto = document.getElementById("texto");

boton.addEventListener("click", function() {
    
    if (texto.textContent == "Hola") {

        texto.textContent = "Adiós";
      } else {
        texto.textContent = "Hola";
      }
    
});


