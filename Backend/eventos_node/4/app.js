
//Escuchar eventos personalizados una sola vez.

const EventEmitter = require('events');
const emisor = new EventEmitter();

emisor.once('newEvent', () => {
    console.log('El Evento ha ocurrido una vez');
});

emisor.emit('newEvent');



//once
//Eliminar o detener listener