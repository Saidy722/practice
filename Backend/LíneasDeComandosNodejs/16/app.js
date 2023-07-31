//Crea un programa que lea un archivo de texto y reemplace todas las instancias de una palabra por otra

const fs = require("fs");
const texto = "texto.txt";

fs.readFile(texto, "utf8", (error, data) => {
  if (error) {
    console.error("Error al leer el archivo", error);
    return;
  }
  console.log("Archivo de texto:", data);
  const palabraAntigua = "tigres";
  const nuevaPalabra = "Hormigas";
  const textoModificado = data.replace(new RegExp(palabraAntigua, "g"), nuevaPalabra);
  console.log("Texto modificado:", textoModificado);

  const palabraEjemplo = "palabras";
  mostrarPalabrasIguales(palabraEjemplo, data);
});

function mostrarPalabrasIguales(palabra, texto) {
  const palabras = texto.split(/\s+/);
  const palabrasCambiadas = palabras.map((palabra) => palabra.replace(/tigres/g, "Hormigas"));
  console.log(palabrasCambiadas);
}
