//Crea un módulo que contenga una función que reciba una cadena y devuelva el número de veces que aparece cada letra en la cadena (sin considerar espacios ni caracteres especiales). Luego, crea otro archivo en el que llames a esta función con una cadena y muestres el resultado en la consola.

function aparicionLetra(words) {
  const letras = words.replace(/[^a-zA-Z]/g, '');//Para eliminar todos los caracteres no alfabéticos espacios y caracteres especiales. 
const frecuenciaLetras = {};

  for (const letra of letras) {
    frecuenciaLetras[letra] = (frecuenciaLetras[letra] || 0) + 1;
  }
  return frecuenciaLetras;
}

module.exports = aparicionLetra;
