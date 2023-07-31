//Crea una función llamada uploadFile que tome un nombre de archivo y una promesa de File como argumentos, y devuelva una promesa que resuelva con una URL de descarga del archivo subido al servidor.

function upLoadFile(file, promise) {
  return new Promise((resolve, reject) => {
    const url = "http//www.datepage.com.co";
    resolve(url);
    reject(error);
  });
}

const promise = new Promise((resolve) => {
    const file = "Subiendo archivo";
    resolve(file);
})

upLoadFile("Subiendo archivo")
  .then((url) => {
    console.log("Archivo en la nube : ", url);
  })
  .catch((error) => {
    console.error("Error en el archivo");
  });

