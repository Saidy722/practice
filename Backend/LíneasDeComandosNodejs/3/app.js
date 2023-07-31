//Crea una función que tome un número como argumento y compruebe si es par o impar. Haz que se ejecute cuando se pase un número a través de la línea de comandos.


function number(numero) {
  if (numero % 2 === 0) { 
    console.log("El número es par");
  } else {
    console.log("El número es impar");
  }
}

const argumento = parseInt(process.argv[2]); //Para tomar el número como argumento

if (argumento) {
  number(argumento); //Se llama con la función
} else {
  console.log("Por favor, proporcione un número válido como argumento.");
}

