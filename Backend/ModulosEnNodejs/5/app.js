//Crea un módulo que contenga una función que devuelva la fecha actual en formato "dd/mm/yyyy". Luego, crea otro archivo en el que llames a esta función y muestres el resultado en la consola.

// Importar la función fechaA desde el archivo fecha.js
const fechaA = require('./fecha');

// Llamar a la función fechaA pasando la fecha actual como argumento
const fechaActual = new Date();//Constructor  Date
const fechaFormateada = fechaA(fechaActual);
console.log(fechaFormateada);


