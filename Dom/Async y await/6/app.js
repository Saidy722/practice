/* Implementa una función llamada cuadradosNumeros que
recibe una lista de números llamada numeros.
La función debe calcular el cuadrado de cada número de la
lista y retorna una promesa que se resuelve con una lista de
objetos. Cada objeto debe tener dos propiedades: número (el
número original) y cuadrado (el cuadrado del número).
Si la lista de números está vacía, la promesa debe ser
rechazada con un mensaje de error.
 */
function cuadradosNumeros(numeros) {
  return new Promise((resolve, reject) => {
    if (numeros.length == 0) {
      reject("La lista de números está vacía");
    } else {
      const resultado = numeros.map((numero) => ({
        numero: numero,
        cuadrado: numero * numero,
      }));
      resolve(resultado);
    }
  });
}

const numeros = [1, 2, 3, 4, 5];

cuadradosNumeros(numeros)
  .then((resultado) => {
    console.log(resultado);
  })
  .catch((error) => {
    console.error(error);
  });

[
  { numero: 1, cuadrado: 1 },
  { numero: 2, cuadrado: 4 },
  { numero: 3, cuadrado: 9 },
  { numero: 4, cuadrado: 16 },
  { numero: 5, cuadrado: 25 },
];
