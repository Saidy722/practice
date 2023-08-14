
//Crear un temporizador que emita un evento después de un cierto período de tiempo.

const EventEmitter = require('events');
const objEmisor = new EventEmitter();

const interval = setInterval(function() {
    objEmisor.emit('data', new Date());
}, 1000);

objEmisor.on('data', function(fechaActual) {
    console.log("La fecha actual es: " + fechaActual);
});

// Para detener el intervalo después de un tiempo determinado
setTimeout(function() {
    clearInterval(interval); // Detener el intervalo
    objEmisor.removeAllListeners('data'); // Eliminar todos los listeners del evento 'data'
    console.log("Ejercicio detenido.");
}, 5000);

