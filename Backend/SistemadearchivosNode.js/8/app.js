//Elimina el archivo "ejemplo.txt".

const fs = require('fs');
const archivo = 'ejemplo.txt';

fs.unlink(archivo, (error) => {
    if(error) {
        console.log('No se logró eliminar el archivo con éxito')
    } else {
        console.log('Archivo eliminado con éxito');
    }
})