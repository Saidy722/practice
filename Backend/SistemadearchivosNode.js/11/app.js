
//Crea un programa que lea un archivo de texto con una lista de nombres y apellidos, los ordene alfabéticamente y los guarde en otro archivo. Cada nombre y apellido debe estar en una línea separada.

const fs = require('fs');

const textoEntrada = 'datos.txt';
const textoSalida = 'nuevosDatos.txt';

fs.readFile(textoEntrada, 'utf8', (err, data) => {
    if (err) {
        console.error('Error al leer el archivo:', err);
        return;
    }
    
    // Dividir el contenido en líneas y ordenarlas
    const lineas = data.trim().split('\n');
    lineas.sort();

    // Unir las líneas ordenadas en un solo string
    const textoOrdenado = lineas.join('\n');

    fs.writeFile(textoSalida, textoOrdenado, 'utf8', (err) => {
        if (err) {
            console.error('Error al escribir en el archivo:', err);
            return;
        }
        console.log('Archivo ordenado exitosamente.');
    });
});
