
//Capturar errores de eventos personalizados

const EventEmitter = require('events');

class MyEventEmitter extends EventEmitter {}

const myEventEmitter = new MyEventEmitter();

myEventEmitter.on('error', (error) => {
  console.log('Ha ocurrido un error:', error.message);
});

myEventEmitter.emit('error', new Error('ERROR'));
