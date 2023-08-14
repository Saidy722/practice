
//Escuchar un evento personalizado y ejecutar una función cuando se emite el evento.

const EventEmitter = require('events');

// Crear una instancia del emisor de eventos
const emisor = new EventEmitter();

// Definir la función que se ejecutará cuando se emita el evento
function miFuncion(data) {
    console.log("Evento personalizado", data);
}

// Escuchar el evento y ejecutar la función
emisor.on("Evento Personalizado", miFuncion);

// Emitir el evento personalizado
let contenidoEvento = {mensaje:"Hola sumercé"};
emisor.emit("Evento Personalizado", contenidoEvento);