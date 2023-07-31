//Crea una función llamada getDirections que tome un origen y un destino como argumentos, y devuelva una promesa que resuelva con un objeto de instrucciones de navegación (puedes simular la respuesta de una API externa usando getData).

function getDirections(origen, destino) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const instructions = {

        pasos: "Gira a la izquierda en la calle principal, continúa recto durante 2 kilómetros Gira a la derecha en la intersección y continúa recto durante 500 metros. Has llegado a tu destino",
        
      };
      resolve(instructions);
      reject("Instrucciones de navegación: Desactivada");
    }, 2000);
  });
}

const origen = "123 Calle Escarlata";
const destino = "456 Calle Sparrow";

getDirections(origen, destino)
.then(instructions => {
    console.log("Instrucciones de navegación: Activada", instructions)
})
.catch(error => {
    console.log(error)
}
    )