
//Enumera los archivos en la carpeta "archivos" y muéstralos en la consola.

const fs = require('fs');
const carpeta = 'archivos';


fs.readdir(carpeta, (err, archivos) => {
    if(err) {
        console.log('No se pudo realizar el conteo', err);
        return;
    } 
    
const totalArchivos = archivos.length;
console.log(`La carpeta ${carpeta} contiene ${totalArchivos} archivos`);
})
