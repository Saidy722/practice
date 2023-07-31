//Crea una función llamada getUserData que tome un ID de usuario como argumento y devuelva una promesa que resuelva con el objeto de datos del usuario con ese ID (puedes simular la respuesta de una API externa usando getData).

function getUserData(nombre, edad, ciudad) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const id = {
        nombre: "Alí",
        edad: "24",
        ciudad: "Luxemburgo",
      };

      if (nombre === "Alí" && edad === "24" && ciudad === "Luxemburgo") {
        resolve(true);
      } else {
        reject(false);
      }
    }, 1000);
  });
}
let nombre = "Alí";
let edad = "24";
let ciudad = "Luxemburgo";

login(nombre, edad, ciudad)
  .then(() => {
    console.log(usuario, ": ID verificado");
  })
  .catch(() => {
    console.error("ID sin procedencia");
  });
