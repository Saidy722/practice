
//Crea un programa que lea un archivo JSON, procese los datos y los escriba en otro archivo en formato CSV.

const fs = require("fs");//File system
const createCsvWriter = require("csv-writer").createObjectCsvWriter; //Librería
const archivo = "./personas.json";
const fileCsv = "datos.csv";//Nuevos datos

function processData(data) {
  const processedData = data.personas.map(persona => {//keys and values
    return {
      apellidos: persona.apellidos,
      nombres: persona.nombres,
      edad: persona.edad
    };
  });

  return processedData;
}

fs.readFile(archivo, "utf-8", (err, data) => {//Leer el archivo
  if (err) {
    console.log("Error al leer el archivo", err);
    return;
  }

  try {
    const jsonData = JSON.parse(data);
    const processedData = processData(jsonData);//Función que puede generar error
    writeDataToCsv(processedData, fileCsv);
  } catch (error) {//Capturar error
    console.error("Error al procesar el archivo JSON:", error);
  }
});

function writeDataToCsv(data, newFileCsv) {//Datos y ruta
  const csvWriter = createCsvWriter({
    path: newFileCsv,//Path -> ruta del archivo
    header: [//Encabezado del CSV
      { id: "apellidos", title: "apellidos" },
      { id: "nombres", title: "nombres" },
      { id: "edad", title: "edad" }
    ],
  });

  csvWriter //Para agregar los datos y escribirlos en el archivo CSV.
    .writeRecords(data)
    .then(() => console.log("Datos escritos correctamente en el archivo CSV"))
    .catch((error) =>
      console.error("Error al escribir los datos en el archivo CSV:", error)
    );
}

