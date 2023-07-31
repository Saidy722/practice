/* Implementa una función llamada comparar que reciba dos
parámetros numéricos llamados a y b.

Si a es mayor que b, la función debe retornar una promesa
que se resuelve con el valor "a es mayor que b".
Si b es mayor que a, la función debe retornar una promesa
que se resuelve con el valor "b es mayor que a".
Si a y b son iguales, la función debe retornar una promesa que
se rechaza con el valor "a y b son iguales". */

function comparar(a, b) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (a > b) {
          resolve("a es mayor que b");
        } else if (b > a) {
          resolve("b es mayor que a");
        } else {
          reject(new Error('a y b son iguales'));
        }
      }, 2000);
    });
  }
  
  async function resultado() {
    try {
      const numbers = {
        a: 3,
        b: 7,
      };
      console.log('Calculando resultado...');
      const resultadoComparacion = await comparar(numbers.a, numbers.b);
      console.log(resultadoComparacion);
    } catch (error) {
      console.error(error);
    }
  }
  
  resultado();
  


