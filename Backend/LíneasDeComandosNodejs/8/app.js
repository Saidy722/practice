
//Crea un programa que genere un archivo CSV con datos aleatorios.

const fs = require('fs');
// Importa el módulo 'fs' de Node.js.
const casual = require('casual');// Importa la biblioteca 'casual' para generar datos aleatorios.


let data = 'Name, Email, Age\n';//Data para los datos del archivo CSV

for (let i = 0; i < 10; i++) {
  // Genera datos aleatorios y los agrega a la variable 'data' en formato CSV.
  const name = casual.full_name;//Función full_name para nombre aleatorio.
  const email = casual.email;//Función email para generar el correo aleatorio.
  const age = casual.integer(from = 18, to = 60);
  data += `${name},${email},${age}\n`;//Función integer edad aleatoria.
}

// Escribir datos en el archivo
fs.writeFile('data.csv', data, (err) => {// Utiliza la función 'writeFile()' del módulo 'fs' para escribir los datos en el archivo 'data.csv'.
  if (err) {
    console.error('Error al crear el archivo:', err);
  } else {
    console.log('Archivo data.csv creado exitosamente');
  }
});

//fs->Módulo sistema de archivos








