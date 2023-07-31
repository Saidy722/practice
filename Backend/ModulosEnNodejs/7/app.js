//Crea un módulo que contenga una función que reciba un número y devuelva si es par o impar. Luego, crea otro archivo en el que llames a esta función con un número y muestres el resultado en la consola.

function parImpar(number) {
  if (number % 2 === 0) {
    return ("El número es par");
  } else {
    return("El número es impar");
  }

}

module.exports =parImpar;