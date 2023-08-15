

//Crear Array
let frutas = ["manzana", "pera", "melón"];
console.log(frutas.length);

//console.log(ultimo);
let primero = frutas[0];
let medio = frutas[1];
let ultimo = frutas[2];
console.log(primero);
console.log(medio);
console.log(ultimo);

//Recorrer un Array
frutas.forEach(function(elemento, indice, array) {
    console.log(elemento, indice);
});

//Añadir un elemento al final de un Array
let nuevaLongitud = frutas.push("Naranja");
console.log(frutas);

//Eliminar el último elemento de un Array
let eliminarUltimo = frutas.pop();
console.log(frutas);

//Añadir un elemento al principio de un Array
let nuevaLong = frutas.unshift("Fresa");
console.log(frutas);

//Eliminar el primer elemento de un Array
let primerF = frutas.shift();
console.log(frutas);

//Encontrar el índice de un elemento del Array
frutas.push("Fresa");
let posicion = frutas.indexOf("melón")
console.log("Posición: ", posicion);

//Eliminar un único elemento mediante su posición
let elementoEliminado = frutas.splice(posicion, 1);
console.log(elementoEliminado);

//Eliminar varios elementos a partir de una posición
let vegetales = ["Repollo", "Nabo", "Rábano", "Zanahoria"];
console.log(vegetales);

let pos = 1;
numElementos = 2;

let elementosEliminados = vegetales.splice(pos, numElementos);
console.log(vegetales);

let copiarArray = vegetales.slice();
console.log(copiarArray);

let arr = [
    "este es el primer elemento",
    "este es el segundo elemento",
    "este es el último elemento",
  ];
  console.log(arr[0]); // escribe en consola 'este es el primer elemento'
  console.log(arr[1]); // escribe en consola 'este es el segundo elemento'
  console.log(arr[arr.length - 1]); // escribe en consola 'este es el último elemento'

  let decadas = [1950, 1960, 1970, 1980, 1990, 2000, 2010]
  console.log(decadas[0]) // funciona correctamente

//
frutas[5] = "fresa";
console.log(frutas[5]); // 'fresa'
console.log(Object.keys(frutas)); // ['0', '1', '2', '5']
console.log(frutas.length); // 6

//
frutas.length = 10;
console.log(frutas); // ['banana', 'manzana', 'pera', <2 empty items>, 'fresa', <4 empty items>]
console.log(Object.keys(frutas)); // ['0', '1', '2', '5']
console.log(frutas.length); // 10

//
frutas.length = 2;
console.log(Object.keys(frutas)); // ['0', '1']
console.log(frutas.length); // 2

//Propiedades de instancia