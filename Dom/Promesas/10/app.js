//Crea una función llamada getUserInfo que tome un ID de usuario como argumento y devuelva una promesa que resuelva con un objeto que contenga la siguiente información del usuario: nombre, correo electrónico, edad, ciudad de residencia y los últimos 5 tweets del usuario (usando el nombre de usuario).

function getUserInfo(id) {
  return new Promise((resolve, reject) => {
    getUserData(id)
      .then((userData) => {
        getUserTweets(userData.usuario)
          .then((tweets) => {
            getUserAge(userData.edad)
              .then((edad) => {
                const userInfo = {
                  nombre: userData.name,
                  correo: userData.email,
                  edad: userData.edad,
                  ciudad: userData.city,
                  tweets: tweets,
                };
                resolve(userInfo);
              })
              .catch((error) => {
                reject(error);
              });
          })
          .catch((error) => {
            reject(error);
          });
      })
      .catch((error) => {
        reject(error);
      });
  });
}

function getUserData(id) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const userData = {
        name: "Alejandro Magno",
        email: "alejoMagno@hotmail.com",
        edad: "24 años",
        city: "Pompeya",
        usuario: "AlejoMagno",
      };
      resolve(userData);
      reject("Error");
    }, 1000);
  });
}

function getUserTweets(usuario) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const tweets = [
        "Este es el último tweet de @" + usuario,
        "Este es el penúltimo tweet de @" + usuario,
        "Este es el antepenúltimo tweet de @" + usuario,
        "Este es el cuarto tweet más reciente de @" + usuario,
        "Este es el tercer tweet más reciente de @" + usuario,
      ];

      resolve(tweets);
      reject("Error");
    }, 2000);
  });
}

function getUserAge(edad) {
  return new Promise((resolve, reject) => {
    const añoActual = new Date().getFullYear();
    const añoNacimiento = new Date(edad).getFullYear();
    const age = añoActual - añoNacimiento;

    resolve(edad);
    reject("Error");
  });
}

getUserInfo(id)
  .then((userInfo) => {
    console.log("Nombre:", userInfo.nombre);
    console.log("Correo electrónico:", userInfo.correo);
    console.log("Edad:", userInfo.edad);
    console.log("Ciudad:", userInfo.ciudad);
    console.log("Tweets:", userInfo.tweets);
  })
  .catch((error) => {
    console.log("Error al obtener la información del usuario:", error);
  });
