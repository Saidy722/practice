//Crea un archivo JSON con el siguiente objeto: { "nombre": "Juan", "apellido": "Pérez", "edad": 35 }. Guárdalo como "datos.json".

const fs = require('fs');

const objeto = {
    "nombre": "Juan", 
    "apellido": "Pérez", 
    "edad": 35
};

const objetoJson = JSON.stringify(objeto, null, 2);
fs.writeFileSync('datos.json', objetoJson);

console.log('Archivo creado exitosamente');

