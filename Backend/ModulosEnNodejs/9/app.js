//Crea un módulo que contenga una función que reciba un arreglo de cadenas y devuelva la cadena más larga. Luego, crea otro archivo en el que llames a esta función con un arreglo de cadenas y muestres el resultado en la consola.

function cadenaMasLarga(arreglo) {
  if (arreglo.length === 0) {
    return "Arreglo vacío";
  }

  let cadena = arreglo[0];

  for (let i = 0; i < arreglo.length; i++) {
    if (arreglo[i].length > cadena.length) {
      cadena = arreglo[i];
    }
  }

  return cadena;
}

module.exports = cadenaMasLarga;
