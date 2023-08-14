
//Escuchar eventos del sistema operativo y tomar medidas según sea necesario.

const EventEmitter = require('events');

class SystemEvents extends EventEmitter {}

const systemEmitter = new SystemEvents();

systemEmitter.on('shutdown', () => {
  console.log('System is shutting down...');

});

// Escuchar evento personalizado 'reboot'
systemEmitter.on('reboot', () => {
  console.log('System is rebooting...');

});

// Simular un evento personalizado 'shutdown'
setTimeout(() => {
  systemEmitter.emit('shutdown');
}, 2000);

// Simular un evento personalizado 'reboot'
setTimeout(() => {
  systemEmitter.emit('reboot');
}, 4000);

