//Crea un programa que lea un archivo de texto con información de una lista de personas (nombre, edad, email) y genere un archivo HTML con una tabla que muestre esta información.


const fs = require('fs');

fs.readFile('personas.txt', 'utf8', (err, data) => {
    if (err) {
        console.error('Error al leer el archivo:', err);
        return;
    }

    const lines = data.split('\n');
    const personas = lines.map(line => line.split(','));

    const infoPersonas = `
    <!DOCTYPE html>
    <html>
    <head>
        <title>Lista de Personas</title>
    </head>
    <body>
    
    <h1>Lista de Personas</h1>
    
    <table border="1">
        <tr>
            <th>Nombre</th>
            <th>Edad</th>
            <th>Email</th>
        </tr>
        ${personas.map(persona => `
        <tr>
            <td>${persona[0]}</td>
            <td>${persona[1]}</td>
            <td>${persona[2]}</td>
        </tr>
        `).join('')}
    </table>
    
    </body>
    </html>
    `;

    // Crea el archivo HTML con la tabla
    fs.writeFile('personas.html', infoPersonas, (err) => {
        if (err) {
            console.error('Error al crear el archivo HTML:', err);
            return;
        }
        console.log('Archivo HTML creado exitosamente.');
    });
});

