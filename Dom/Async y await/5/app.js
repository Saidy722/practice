/* Implementa una función llamada tamanioTotalRespuestas
que recibe una lista de URLs llamada urls.
La función debe realizar una petición HTTP a cada URL y sumar.
el tamaño en bytes de las respuestas.
La función debe retornar una promesa que se resuelve con el
tamaño total en bytes de las respuestas. */

function tamanioTotalRespuestas(urls) {
  return Promise.all(
    urls.map((url) => //Para todas las solicitudes.
      fetch(url).then((response) => {
        if (!response.ok) {
          throw new Error( //El error que se lanza.
            `Error en la petición a ${url}: ${response.status} ${response.statusText}`
          );
        }
        return response;
      })
    )
  )
    .then((responses) => {
      return Promise.all(responses.map((response) => response.blob()));
    })
    .then((blobs) => {
      let totalBytes = 0;
      blobs.forEach((blob) => {
        totalBytes += blob.size;
      });
      return totalBytes;
    });
}

const urls = [
  "https://jsonplaceholder.typicode.com/",
  "https://jsonplaceholder.typicode.com/",
  "https://jsonplaceholder.typicode.com/",
  "https://jsonplaceholder.typicode.com/",
];

async function obtenerTamanioTotal() {
  try {
    const resultado = await tamanioTotalRespuestas(urls);
    console.log(resultado);
  } catch (error) {
    console.log(error);
  }
}

obtenerTamanioTotal();
