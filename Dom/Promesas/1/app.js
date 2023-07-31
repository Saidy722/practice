//Crea una función llamada sum que tome dos números como argumentos y devuelva una promesa que resuelva con la suma de estos dos números.

function sum(number1,number2) {
    return new Promise((resolve, reject) => {
        const resultado = number1 + number2;
        resolve(resultado);
        reject(error);
    });
}

var number1 = 7;
var number2 = 2;

sum(number1,number2)
.then(resultado => {
    console.log("Suma: ", resultado)
})

.catch((error) => {
    reject(error);
  });

