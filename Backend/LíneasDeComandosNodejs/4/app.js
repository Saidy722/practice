//Crea un programa que solicite al usuario que ingrese su nombre y lo imprima en la consola.

console.log("Ingresa tu nombre");
const nombre = process.openStdin();

nombre.addListener("data", (data) => {
  console.log("Tu nombre es: ", data.toString());
});
