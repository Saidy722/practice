//Crea un archivo llamado "ejemplo.txt" y escribe la cadena "Hola, mundo!" en él.

const fs = require('fs');
const saludo = '¡Hola mundo!';

fs.writeFile('ejemplo.txt', saludo, 'utf8', (err) => {
    if (err) {
        console.error('Error al escribir en el archivo', err)
    } else {
        console.log('Archivo creado exitosamente');
    }
});