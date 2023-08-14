

//Eliminar un controlador de eventos personalizado

const EventEmitter = require('events');

class MiEmisorDeEventos extends EventEmitter {}

const miEmisor = new MiEmisorDeEventos();

function controladorDeEvento(data) {
    console.log('Evento personalizado:', data);
}

// Registrar el controlador para el evento personalizado
miEmisor.on('eventoPersonalizado', controladorDeEvento);

miEmisor.emit('eventoPersonalizado', { mensaje: 'Holi'});

// Eliminar el controlador de eventos personalizado
miEmisor.removeListener('eventoPersonalizado', controladorDeEvento);

// Emitir el evento personalizado nuevamente
miEmisor.emit('eventoPersonalizado', { mensaje: 'Holi otra vez' });












