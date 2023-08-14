
//Mueve el archivo "ejemplo.txt" a la carpeta "archivos".

const fs = require('fs');
const archivoTexto = './ejemplo.txt';
const directorio = './archivos/ejemplo.txt';

fs.rename(archivoTexto, directorio, (err) => {
    if (err) {
        console.log('Error al mover el archivo', err);
    } else {
        console.log('Archivo movido exitosamente')
    }
})


