//Elimina la carpeta "archivos" y todos sus contenidos.

const fs = require('fs');
const directorio = 'archivos';

fs.rm(directorio, {recursive: true}, (err) => {
    if (err) {
        console.log('Directorio eliminado con éxito');
    } else {
        console.log('Directorio eliminado con éxito');
    }
});