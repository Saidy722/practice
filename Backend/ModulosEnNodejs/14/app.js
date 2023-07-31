//Crea un módulo que contenga una función que reciba un arreglo de números y devuelve la mediana (el valor que está en el centro del arreglo ordenado). Luego, crea otro archivo en el que llames a esta función con un arreglo de números y muestres el resultado en la consola.

function arregloNumeros(numbers) {

    const centro = Math.floor(numbers.length / 2);// Obtener el índice del centro (el valor que está en el centro.

    if (numbers.length % 2 === 0) {
        return (numbers[centro - 1] + numbers[centro]) / 2;//Si hay dos valores centrales porque el contenio del array es par.
    } else {
        return (numbers[centro]);//Si el contenido del array es impar muestra el del centro.
    }

}

module.exports = arregloNumeros;

