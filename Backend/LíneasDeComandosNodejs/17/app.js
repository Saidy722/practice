

//Crea un programa que lea un archivo de texto y encuentre la palabra más común en el archivo.

const fs = require("fs");

function palabraMasComun(texto) {
  const regex = /[\wáéíóúÁÉÍÓÚñÑ]+/g; //Captura palabras completas en el texto, incluyendo letras, números y letras acentuadas.
  const palabras = texto.toLowerCase().match(regex); // Usar .match() para capturar las palabras.

  if (!palabras) {
    // Manejar el caso cuando no se encuentran palabras en el texto.
    return "No se encontraron palabras en el texto.";
  }

  const conteoPalabras = {};

  palabras.forEach((palabra) => {
    conteoPalabras[palabra] = (conteoPalabras[palabra] || 0) + 1;
  });

  let palabraMasComun = "";
  let maxFrecuencia = 0;

  Object.keys(conteoPalabras).forEach((palabra) => {
    if (conteoPalabras[palabra] > maxFrecuencia) {
      palabraMasComun = palabra;
      maxFrecuencia = conteoPalabras[palabra];
    }
  });

  return palabraMasComun;
}

const nombreArchivo = "cuento.txt";
const texto = fs.readFileSync(nombreArchivo, "utf8");
const palabraMasComunEnTexto = palabraMasComun(texto);

console.clear();
console.log("Palabra mas comun:", palabraMasComunEnTexto);


