//Añade un evento submit a un formulario y muestra una alerta con el contenido del campo nombre al enviar el formulario. evento


const form = document.getElementById('form');

form.addEventListener("submit", (e) => {
e.preventDefault();
const nombre = document.getElementById('nombre').value;
alert(nombre);
});



