//Crea un programa que lea un archivo de texto y calcule la frecuencia de cada palabra en el archivo.


const fs = require("fs");

function calcularFrecuenciaDePalabras(texto) {
  texto = texto.toLowerCase();
  const palabras = texto.split(/\W+/); // Utilizamos /\W+/ como el patrón de separación para obtener solo las palabras

  const frecuencias = {};

  for (const palabra of palabras) {
    if (palabra !== "") {
      frecuencias[palabra] = (frecuencias[palabra] || 0) + 1;
    }
  }

  return frecuencias;
}

// Leer el archivo "file.txt"
fs.readFile("file.txt", "utf8", (err, data) => {
  if (err) {
    console.log("Error:", err);
  } else {
    const frecuencias = calcularFrecuenciaDePalabras(data);

    // Mostrar las frecuencias de cada palabra
    for (const palabra in frecuencias) {
      console.log(`"${palabra}" aparece ${frecuencias[palabra]} veces.`);
    }
  }
});
