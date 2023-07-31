//Crea una función llamada getData que simule una llamada a una API externa (por ejemplo, usando setTimeout) y devuelva una promesa que resuelva con un objeto de datos.

function getData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      //Callback
      datos = { data: "Archivos adjuntos" }; //Objeto
      resolve(datos);
      reject(new Error("ERROR!"));
    }, Math.random() * 1000);
  });
}

getData()
  .then((data) => {
    console.log(data);
  })

  .catch((error) => {
    error.message;
  });
