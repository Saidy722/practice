

//Pasar datos a través de eventos personalizados.

const EventEmitter = require('events');

// Crear una clase que extienda EventEmitter
class MiEmmitter extends EventEmitter {}

// Instanciar la clase personalizada de EventEmitter
const miEmmitter = new MiEmmitter();

miEmmitter.on('DatosEnviados', (datos) => {
    console.log('Datos recibidos:', datos);
});

// Emitir el evento personalizado y pasar datos
const datos = "name: Saidy - City: Cúcuta";
miEmmitter.emit("DatosEnviados", datos);