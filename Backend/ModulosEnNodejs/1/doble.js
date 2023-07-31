
const llamarNumeroApp = require('./app'); //Llamar al archivo app.js
const numero = 77;//Definir número a multiplicar por dos
const doble = llamarNumeroApp(numero);//Llamo a la función qur contiene el numero

console.log(`El doble de ${numero} es ${doble}`);