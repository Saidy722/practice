/* Implementa una función llamada resolverPromesa que recibe
un parámetro llamado resuelve que representa si la promesa
debe resolverse o rechazarse.
Si el parámetro resuelve es true, la función debe retornar una
promesa que se resuelve con el valor "La promesa fue
resuelta".
Si el parámetro resuelve es false, la función debe retornar una
promesa que se rechaza con el valor "La promesa fue
rechazada". */

function resolverPromesa(resuelve) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const resuelve = true;
      if (resuelve == true) {
        resolve(resuelve);
      } else {
        reject(new Error("Rechazado"));
      }
    }, 3000);
  });
}

async function resultado(resuelve) {
  await resolverPromesa(resuelve);
}

async function Aceptado() {
  try {
    console.log("Comprobando... ");
    await resultado(false);
    console.log("Aceptado ");
  } catch (error) {
    console.error(error);
  }
}

Aceptado();
