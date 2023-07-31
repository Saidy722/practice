
//Crea un módulo que contenga una función que reciba una cadena y devuelva la cadena invertida. Luego, crea otro archivo en el que llames a esta función con una cadena y muestres el resultado en la consola

function cadenaInvertida(texto) {
return texto.split('').reverse('').join('');
}

module.exports = cadenaInvertida;