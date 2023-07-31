
const promedio = require("./app");

const informacionEstudiantes = [{nombre: 'Alexia Zapata', promedio: '4.32'}, {nombre: 'Ed Pinzón', promedio: '3.59'}, {nombre: 'Mile Vidú', promedio: '2.78'}, {nombre: 'Anderson Sanabria', promedio: '5.00'}];

const resultado = promedio(informacionEstudiantes);

console.log(resultado);

