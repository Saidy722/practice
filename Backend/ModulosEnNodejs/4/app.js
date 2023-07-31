//Crea un módulo que contenga una función que devuelva un saludo personalizado según el nombre que se le pase como argumento. Luego, crea otro archivo en el que llames a esta función con un nombre y muestres el resultado en la consola.

function saludo(name) {
return (` Hola ${name}`);
}

module.exports = saludo;