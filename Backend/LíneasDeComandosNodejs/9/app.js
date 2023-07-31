

//Crea un programa que lea un archivo CSV, procese los datos y los escriba en otro archivo.


const fs = require("fs");//Se importa el módulo para trabajar con el sistema de archivos
const csv = require('csv-parser');//Se importa el módulo que permite analizar archivos CSV y extraer los datos de cada fila.
const createCsvWriter = require('csv-writer').createObjectCsvWriter;//Se importa la función createObjectCsvWriter del módulo csv-writer, que se utiliza para crear un escritor de CSV
const resultados = [];

fs.createReadStream('data.csv')//Se crea una corriente de lectura del archivo CSV llamado "data.csv" utilizando fs.createReadStream, para leer el archivo de forma eficiente sin cargar todo su contenido en memoria a la vez
  .pipe(csv())//Se conecta la corriente de lectura a csv-parser, lo que hace que cada línea del archivo CSV se analice y se convierta en un objeto.
  .on('data', (data) => {//Se define un evento 'data' que se activa cada vez que se procesa una línea del archivo CSV. Dentro del evento, los datos de cada línea se agregan al array resultados.
    resultados.push(data);
  })
  .on('end', () => {// Se define un evento 'end' que se activa al finalizar la lectura del archivo CSV. Dentro del evento, se ejecuta el código adicional para procesar los datos.
    console.log('Datos procesados:', resultados);//Datos procesados en el Array

    const csvWriter = createCsvWriter({
      path: 'newFile.csv',
      header: Object.keys(resultados[0]).map((key) => ({ id: key, title: key })),
    });//Se crea un escritor de CSV utilizando createObjectCsvWriter con las opciones de configuración proporcionadas.

    csvWriter.writeRecords(resultados)//Se escribe los registros en el nuevo archivo CSV utilizando el escritor de CSV.
      .then(() => console.log('Archivo CSV creado exitosamente.'))
      .catch((error) => console.error('Error al generar el archivo CSV:', error));
  });











