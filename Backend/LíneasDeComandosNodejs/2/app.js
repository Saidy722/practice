//Crea una función en un archivo de JavaScript y haz que se ejecute cuando se pase un argumento a través de la línea de comandos usando process.argv.

function sumar(a) {
  const number = 7;
  const resultado = parseInt(a) + number;
  console.log('El resultado es: ', resultado);
}

const a = process.argv[2];

if(a){
  sumar(a);
}else{
  console.log('Argumento no válido');
} 