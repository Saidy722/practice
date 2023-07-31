//Crea un programa que lea un archivo de texto y encuentre todas las palabras que empiezan con una letra determinada.

const fs = require("fs"); //Funcionalidades para leer y crear archivos
const texto = "file.txt"; //Archivo e texto realizado aparte
const letra = "e"; //Letra que seleccioné

fs.readFile(texto, "utf8", (error, data) => {
  //readFile para leer el archivo y utf8 para obtener texto en vez de bytes
  if (error) {
    console.error("Error al leer el archivo:", error);
    return; //Callback
  }
  console.log("Contenido del archivo:", data);
  const palabras = encontrarPalabras(letra, data);
  console.log(palabras);
});

function encontrarPalabras(letra, texto) {
  const palabras = texto.split(" "); //Dividir el texto en palabras y los espacios serían los separadores
  const palabrasEncontradas = [];

  for (let palabra of palabras) {
    if (palabra.charAt(0) == letra) {
      //Para obtener lo que hay en la posicion 0 (Letra que determiné)
      palabrasEncontradas.push(palabra);
    }
  }
  return palabrasEncontradas;
}
console.clear();



