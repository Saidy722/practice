/* Implementa una función llamada esperarSegundos que
reciba un parámetro llamado segundos que representa la
cantidad de segundos que la función debe esperar antes de
resolver la promesa.
La función debe retornar una promesa que se resuelve
después de esperar la cantidad de segundos especificada en
el parámetro. */


function esperarSegundos(segundos) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve();
        reject(new Error('Ocurrió un error'))
      }, segundos * 1000); 
    });
  }
  
async function waitSeconds(segundos) {
    await esperarSegundos(segundos);
  }

  async function bienvenida() {
    try {
      console.log('¡Bienvenido!');
      await waitSeconds(3);
      console.log('¿Qué deseas hacer hoy?');
    } catch (error) {
      console.error('Ocurrió un error:', error);
    }
  }
  
  bienvenida();
  