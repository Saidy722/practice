//Añade un evento click a un botón con ID botón y muestra un mensaje de confirmación antes de eliminar un elemento con ID eliminar.

const boton = document.getElementById('boton');
const eliminar = document.getElementById('eliminar');

boton.addEventListener('click', function() {
eliminar == true;

if (eliminar) {
    alert('¿Desea eliminar el archivo?');
eliminar.parentNode.removeChild(eliminar);
} 

});

