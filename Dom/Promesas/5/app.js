//Crea una función llamada getUsers que devuelva una promesa que resuelva con una lista de objetos de usuarios (puedes simular la respuesta de una API externa usando getData).

function getUsers() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const credenciales = {
        idCard: "Stefan Márquez",
        tutor: "Jeimy Arias",
        beneficiario: "Eli Suárez",
      };
      if (
        idCard == "Stefan Márquez" &&
        tutor == "Jeimy Arias" &&
        beneficiario == "Eli Suárez"
      ) {
        resolve(true);
      } else {
        reject(false);
      }
    }, 1000);
  });
}

let idCard = "Stefan Márquez";
let tutor = "Jeimy Arias";
let beneficiario = "Eli Suárez";

getUsers()
  .then(() => {
    console.log(tutor, "Aprobed");
  })
  .catch(() => {
    console.error("Deneged");
  });
