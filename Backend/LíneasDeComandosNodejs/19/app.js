
//Crea un programa que lea un archivo de texto y encuentre la línea más larga del archivo.

const fs = require("fs");

function encontrarLineaMasLarga(nombreArchivo) {
  const data = fs.readFileSync(nombreArchivo, "utf8");//Leer el contenido del archivo de manera sincrónica. 
  const lineas = data.split("\n");//Dividimos el contenido del archivo en líneas utilizando el método split("\n"), que divide el contenido en cada salto de línea y crea un array de líneas. El array de líneas se almacena en la variable lineas.
  let lineaMasLarga = "";//Se utilizarán para mantener la información de la línea más larga encontrada y su longitud
  let longitudMasLarga = 0;

  lineas.forEach((linea) => {//Para iterar sobre cada línea del array 
    const longitudLinea = linea.length;

    if (longitudLinea > longitudMasLarga) {//Dentro del bucle, calculamos la longitud de cada línea utilizando la propiedad length, que devuelve la cantidad de caracteres de la línea.
      longitudMasLarga = longitudLinea;//Si la longitud de la línea actual es mayor, actualizamos el valor de longitudMasLarga con la longitud de la línea y también actualizamos lineaMasLarga con la línea actual
      lineaMasLarga = linea;
    }
  });

  return lineaMasLarga;
}

// Uso de la función para encontrar la línea más larga en un archivo llamado "archivo.txt"
const nombreArchivo = "texto.txt";
const lineaMasLarga = encontrarLineaMasLarga(nombreArchivo);
console.clear();
console.log(lineaMasLarga);
