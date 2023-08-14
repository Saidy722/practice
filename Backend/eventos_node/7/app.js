
//Crear y utilizar eventos de lectura y escritura en streams de datos.

const stream = require('stream');

const myStream = new stream.Readable();

//Evento personalizado
myStream.on('myevent', (data) => {
  console.log(data);
});

//Emitir evento personalizado
myStream.emit('myevent', 'Hola mundo!');

// Crear un stream de escritura
const writableStream = new WritableStream({
    write: async (chunk) => {
      console.log('Dato escrito:', chunk);
    }
  });
  
  // Escribir datos en el stream
  const writer = writableStream.getWriter();
  writer.write('Hola, ');
  writer.write('mundo!');
  writer.close();
  