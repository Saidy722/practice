
//Crea una carpeta llamada "archivos" en el directorio actual.


const fs = require('fs');

fs.mkdir('/app.js', (err) => {
    if (err) {
        console.log('Error al crear el directorio');
    } else {
        console.log('Directorio creado exitosamente');
    }
});
