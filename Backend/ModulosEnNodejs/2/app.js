//Crea una función que tome un arreglo de números como argumento y devuelva la suma de todos ellos. Luego, crea otro archivo en el que llames a esta función con un arreglo de números y muestres el resultado en la consola.


function sumarNumeros(numeros) {
    let suma = 0;
    for(i=0; i < numeros.length; i++){
        suma += numeros[i]
    }
    return suma;
}
module.exports = sumarNumeros;