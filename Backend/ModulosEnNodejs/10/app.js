

//Crea un módulo que contenga una función que reciba un objeto con propiedades "nombre" y "apellido" y devuelva el nombre completo en formato "apellido, nombre". Luego, crea otro archivo en el que llames a esta función con un objeto y muestres el resultado en la consola.

function obtenerDatos(datos) {
  const { nombre, apellido } = datos;
  return `${apellido}, ${nombre}`;
}

module.exports = obtenerDatos;
