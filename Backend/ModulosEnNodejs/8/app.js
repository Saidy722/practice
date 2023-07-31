
//Crea un módulo que contenga una función que reciba un arreglo de números y devuelva el mayor de ellos. Luego, crea otro archivo en el que llames a esta función con un arreglo de números y muestres el resultado en la consola.

function array(numeros) {
    return (Math.max(...numeros));
}

module.exports = array;