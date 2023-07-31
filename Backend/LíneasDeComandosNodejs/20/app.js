
//Crea un programa que lea un archivo de texto y ordene las líneas del archivo por orden alfabético.

const fs = require('fs');

function ordenarLineasArchivo(archivoEntrada, archivoSalida) {
    fs.readFile(archivoEntrada, 'utf8', (err, data) => {
        if (err) {
            console.error('Error al leer el archivo de entrada:', err);
            return;
        }

        const lineas = data.split('\n');// Dividir el contenido en líneas individuales
        const lineasOrdenadas = lineas.sort();// Ordenar las líneas alfabéticamente
        const contenidoOrdenado = lineasOrdenadas.join('\n');// Unir las líneas ordenadas en un solo string con saltos de línea

        fs.writeFile(archivoSalida, contenidoOrdenado, 'utf8', (err) => {// Escribir el contenido ordenado en el archivo de salida
            if (err) {
                console.error('Error al escribir el archivo de salida:', err);
                return;
            }
            console.log('Archivo ordenado exitosamente.');
        });
    });
}

// Llamar a la función para ordenar el archivo
const archivoEntrada = 'himno.txt';
const archivoSalida = 'himnonuevo.txt';

ordenarLineasArchivo(archivoEntrada, archivoSalida);

