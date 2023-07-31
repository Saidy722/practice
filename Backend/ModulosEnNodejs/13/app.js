
//Crea un módulo que contenga una función que reciba un arreglo de objetos con información de estudiantes (nombre, promedio) y devuelva una cadena con el nombre del estudiante con el mayor promedio. Luego, crea otro archivo en el que llames a esta función con un arreglo de estudiantes y muestres el resultado en la consola.


function promedio(estudiantes) {
  let promedioAlto = 0;//Para almacenar el valor del promedio más alto.
  let nombreEstudiante = '';//Se inicializa como una cadena vacía para almacenar el nombre del estudiante con el promedio más alto.

  for (let i = 0; i < estudiantes.length; i++) {
    if (estudiantes[i].promedio > promedioAlto) {
      promedioAlto = estudiantes[i].promedio;
      nombreEstudiante = estudiantes[i].nombre;
    }
  }
  return (`El mayor promedio corresponde a: ${nombreEstudiante} con un puntaje de: ${promedioAlto}`);
}

module.exports = promedio;
