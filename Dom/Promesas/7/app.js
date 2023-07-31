//Crea una función llamada getWeather que tome una ciudad como argumento, y devuelva una promesa que resuelva con el objeto de tiempo actual para esa ciudad (puedes simular la respuesta de una API externa usando getData).

function getWeather(londres) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const city = {
        londres: "Hora: 22:00 pm - 19°C",
        Panamá: "Hora: 09:00 am - 24°C",
        Argentina: "Hora: 11:00 am - 20°C",
      };
      resolve(city == londres);
      reject(city !== londres);
    }, 1000);
  });
}

getWeather()
  .then((londres) => {
    console.log("Londres -> Hora: 22:00 Pm - 19°C");
  })
  .catch(() => {
    console.error("Ciudad no encontrada");
  });
