
//Crear un evento personalizado y emitirlo.

var EventEmitter = require('events');

var emit = new EventEmitter()
emit.on('msg', function(text) {
    console.log(text)
})
emit.emit('msg', 'Aloha')