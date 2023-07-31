/* Implementa una función llamada obtenerInformacion que
reciba un parámetro llamado id que representa el
identificador de un usuario en una API externa.
La función debe hacer una llamada a la API externa para
obtener la información del usuario con el identificador
especificado en el parámetro id.
Si la llamada a la API es exitosa, la función debe retornar una
promesa que se resuelve con la información del usuario.
Si la llamada a la API es fallida, la función debe retornar una
promesa que se rechaza con un mensaje de error. */

function obtenerInformacion(id) {
  return new Promise((resolve, reject) => {
    llamadaAPI(id)
      .then((info) => {
        resolve(info);
      })
      .catch((error) => {
        reject(new Error('Error al obtener la información del usuario'));
      });
  });
}

function llamadaAPI(id) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (id = 'User') {
        const info = {
          nombre: "August Benfield",
          identificacion: "3.456.231",
        };
        resolve(info);
      } else {
        reject(new Error('Error'));
      }
    }, 2000);
  });
}

async function obtencionInfo() {
  try {
    console.log("Comprobando... ");
    const info = await obtenerInformacion('User');
    console.log("Obtenido:", info);
  } catch (error) {
    console.error(error);
  }
}

obtencionInfo();

  









/*   const userId = 123;
  
  obtenerInformacion(userId)
    .then((info) => {
      console.log('Información del usuario:', info);
    })
    .catch((error) => {
      console.error('Error:', error);
    });
   */

  


















