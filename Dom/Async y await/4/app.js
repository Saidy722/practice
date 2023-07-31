/* Implementa una función llamada calcular que reciba dos
parámetros numéricos llamados a y b, y otro parámetro de
tipo string llamado operacion que representa la operación
matemática que se desea realizar (puede ser "suma", "resta",
"multiplicacion", o "division").
La función debe retornar una promesa que se resuelve con el
resultado de la operación matemática entre a y b, de acuerdo
con el valor del parámetro operacion.
Si el parámetro operacion no tiene un valor válido, la promesa
debe ser rechazada con un mensaje de error. */


function calcular(a, b, operacion) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        let resultado;
  
        if (operacion == 'suma') {
          resultado = a + b;
        } else if (operacion == 'resta') {
          resultado = a - b;
        } else if (operacion == 'multiplicacion') {
          resultado = a * b;
        } else if (operacion == 'division') {
          resultado = a / b;
        } else {
          reject(new Error("Operación inválida"));
        }
  
        resolve(resultado);
      }, 2000);
    });
  }
  
  let a = 2;
  let b = 7;
  
  async function resultado(operacion) {
    try {
      console.log("Calculando...");
      const res = await calcular(a, b, operacion);
      console.log("Resultado:", res);
    } catch (error) {
      console.error(error);
    }
  }
  resultado('suma');
  


