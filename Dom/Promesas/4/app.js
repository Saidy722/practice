//Crea una función llamada login que tome un nombre de usuario y una contraseña como argumentos, y devuelva una promesa que resuelva con true si las credenciales son válidas, o false en caso contrario.

function login(usuario, contraseña) {
  return new Promise((resolve, reject) => {
    if (usuario === "Saidy Vidales" && contraseña === "0000") {
      resolve(true);
    } else {
      reject(false);
    }
  });
}

let usuario = "Saidy Vidales";
let contraseña = "0000";

login(usuario, contraseña)
  .then(() => {
    console.log(usuario, ": Usuario encontrado");
  })
  .catch(() => {
    console.error("Intruso");
  });



