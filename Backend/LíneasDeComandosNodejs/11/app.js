
//Crea un programa que tome como argumento una URL y descargue el contenido de la página web correspondiente en un archivo.


const fs = require('fs');
const axios = require('axios');

const url = process.argv[2];

if(!url) {
    console.log("Por favor, proporciona una URL como argumento.");
    process.exit(1);
}

axios
.get(url)
.then((response) => {
    const contenido = response.data;
    const nombreArchivo = 'contenido.html';

    fs.writeFile(nombreArchivo, contenido, (error) => {
        if(error) {
            console.log('Error al escribir el archivo:', error);
        }else{
            console.log(`El contenido de la URL ${url} se ha descargado y guardado en ${nombreArchivo}`);
        }
    });
})

.catch((error) => {
    console.log("Error al realizar la solicitud HTTP:", error.message);
})















