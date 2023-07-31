const fs = require('fs');
const csv = require('csv-parser');
const jsonFile = "archivo.json";

const datos = [];

fs.createReadStream('file.csv')
  .pipe(csv())
  .on('data', (data) => {
    datos.push(data);
  })
  .on('end', () => {
    const jsonData = JSON.stringify(datos);
    fs.writeFile(jsonFile, jsonData, (err) => {
      if (err) {
        console.error('Error al escribir el archivo JSON:', err);
      } else {
        console.log('Archivo JSON creado:', jsonFile);
      }
    });
  });
