//Crea un programa que lea un archivo de texto y lo imprima en la consola.

const readline = require('readline');//Readline para leer y mostrar el texto en la consola.

const text = readline.createInterface({//Importamos el módulo readline.
  input: process.stdin, //Para tomar la entrada.
  output: process.stdout//Para enviar la salida.
});

text.question('Ingresa un texto: ', (texto) => {//Para mostrar un mensaje al usuario y esperar a que ingrese un texto.
  console.log('Texto ingresado: ' + texto);//Mostrar el texto
  text.close();//Cerrar interfaz de lectura.
});
