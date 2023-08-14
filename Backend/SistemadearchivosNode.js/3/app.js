//Agrega la cadena "Este es un ejemplo" al final del archivo "ejemplo.txt".

const fs = require('fs');
const archivo = './ejemplo.txt';
const textoNuevo = 'Este es un ejemplo';

fs.appendFile(archivo, textoNuevo, 'utf8', (error) => {
    if (error) {
        console.log("Error al agregar contenido al archivo", error);
    } else {
        console.log('Contenido agregado con éxito')
    }
})