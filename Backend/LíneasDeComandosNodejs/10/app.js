
//Crea un programa que lea un directorio y muestre los nombres de todos los archivos que contenga.

const fs = require("fs");

const directorio = "Mi directorio";

// Crear el directorio
fs.mkdir(directorio, (error) => {
  if (error) {
    console.log("Error al crear el directorio:", error);
    return;
  }

  console.log("Directorio creado exitosamente.");

  // Crear archivos dentro del directorio
  const archivos = [
    { nombre: "archivo1.txt", contenido: "James Wood - 201 - 1-346576" },
    { nombre: "archivo2.txt", contenido: "Jane Yurt - 209 - 1-085342" },
    { nombre: "archivo3.txt", contenido: "John Aleck - 212 - 1-120932" },
  ];


  archivos.forEach((archivo) => {
    fs.writeFile(`${directorio}/${archivo.nombre}`, archivo.contenido, (error) => {
      if (error) {
        console.log("Error al crear el archivo:", error);
      } else {
        console.log(`Archivo ${archivo} creado exitosamente.`);
      }
    });
  });
});


