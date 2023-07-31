
const directorio = "Directory";

fs.mkdir(directorio, (error) => {
  if (error) {
    console.error("Error al crear el directorio", error);
    return;
  }

  console.log("Directorio creado exitosamente.");

  const archivos = [
    { file: "file1.txt", info: "Ari Mark - 16-61 - 1-346576" },
    { file: "file2.txt", info: "Ernest Heminghway - 07-70 - 1-346576" },
    { file: "file3.txt", info: "Stella Ruiz - 81-18 - 1-346576" },
    { file: "file4.txt", info: "Freddie Krueger - 21-12 - 1-346576" },
  ];

  archivos.forEach((archivoCreado) => {
    fs.writeFile(
      `${directorio}/${archivoCreado.file}`,
      archivoCreado.info,
      (error) => {
        if (error) {
          console.error("Error al crear el archivo", error);
        } else {
          console.log("Archivo creado exitosamente", archivoCreado);
        }
      }
    );
  });
});