//Copia el archivo "ejemplo.txt" y pégalo en la carpeta "archivos" con un nombre diferente, como "ejemplo_copia.txt".

const fs = require('fs');
const archivoAntiguo = './ejemplo.txt';
const archivoNuevo = './archivos'
const nombreNuevo = 'ejemplo_copia.txt'


fs.copyFile(archivoAntiguo, `${archivoNuevo}/${nombreNuevo}`, (error) => {
    if (error) {
        console.log('Error al copiar el archivo');
    } else {
        console.log('Archivo copiado con éxito');
    }
})

