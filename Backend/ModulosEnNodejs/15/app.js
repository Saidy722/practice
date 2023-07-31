
//Crea un módulo que contenga una función que reciba un número y devuelva un arreglo con los números primos menores o iguales a él. Luego, crea otro archivo en el que llames a esta función con un número y muestres el resultado en la consola.

function definirPrimo(numero) {//Función para saber si el número es primo.
    if (numero < 2) return false;//Si el número es menor que 2 no es primo.

    // Utilizamos un bucle para comprobar si el número tiene algún divisor entre 2 y su raíz cuadrada.
    // Si encontramos un divisor, el número no es primo y retornamos "false".
    // Si no encontramos ningún divisor, el número es primo y retornamos "true".
    for (let i = 2; i <= Math.sqrt(numero); i++) {
        if (numero % i === 0) {
            return false;
        }
    }
    return true;// Si no se encontró ningún divisor, el número es primo y retornamos "true".
}

function numerosPrimos(numero) {//Función para devolver los números primos menores o iguales al número dado.
    const primos = [];//Vacío para guardar los números
    for (let i = 2; i < numero; i++) {
        // Utilizamos un bucle para iterar desde 2 hasta el número dado.
        if (definirPrimo(i)) {// Si el número actual (i) es primo lo agregamos al arreglo "primos".
            primos.push(i);// Retornamos el arreglo con los números primos encontrados.
        }
    }
    return primos;
}

module.exports = numerosPrimos;









