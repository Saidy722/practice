//Crea un programa que lea un archivo de texto, lo modifique y escriba el resultado en otro archivo.

const { stdout, stdin } = require('process');
const readline = require('readline');

const text = readline.createInterface({
    input: stdin,
    output: stdout 
});

text.question('Ingresa el el texto a modificar: ', (texto) => {
    const textoNuevo = texto.toUpperCase();
    console.log('Texto modificado:', textoNuevo);
    text.close();
});