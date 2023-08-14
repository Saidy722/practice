//Escuchar eventos de proceso y tomar medidas según sea necesario.


const process = require('process');

// Escucha el evento
process.on('exit', (code) => {
  console.log(`Exiting with code ${code}`);
});

//0 indica finalización exitosa
