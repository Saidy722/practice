//Lee el contenido del archivo "ejemplo.txt" y muéstralo en la consola.

const fs = require('fs');
const archivo = './ejemplo.txt';

fs.readFile(archivo, 'utf-8', (err, contenido) => {
    if (err) {
        console.log('Error al leer el archivo', err);
    } else {
        console.log('Archivo leído con éxito')
        console.log(contenido)
    }
});
