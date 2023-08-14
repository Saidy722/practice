
//Crea un programa que lea un archivo de texto con un conjunto de números separados por comas, los ordene de menor a mayor, los guarde en otro archivo y calcule la media aritmética.

const fs = require('fs');
const archivo = 'numbers.txt';

fs.readFile(archivo, 'utf8', (error, data) => {
    if (error) {
        console.log('Error al leer el archivo', error);
        return;
    }

    const numeros = data.split(',').map(numero => parseInt(numero));

    numeros.sort(function (a, b) {
        return a - b;
    });

    console.log('Números ordenados numéricamente', numeros);

    const media = numeros.reduce((total, numero) => total + numero, 0) / numeros.length;

    console.log('Media aritmética:', media);

    const numerosOrdenados = numeros.join(',');

    fs.writeFile('numbersAlf.txt', numerosOrdenados, (error) => {
        if (error) {
            console.error('No se ha creado el archivo', error);
            return;
        }
        console.log('Archivo "numbersAlf.txt" creado exitosamente');
    });
});




