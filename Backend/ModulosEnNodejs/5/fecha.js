

function fechaA(fechaActual) {
    const dia = fechaActual.getDate();//Obtener día 
    const mes = fechaActual.getMonth() + 1;//Obtener mes y se coloca +1 porque el conteo empieza dese cero
    const anio = fechaActual.getFullYear();//Obtener año
  
    // Formateamos la fecha en el formato "dd/mm/yyyy"
    const fechaFormateada = `${padZero(dia)}/${padZero(mes)}/${anio}`;
  
    return fechaFormateada;
  }
  
  function padZero(numero) {//Para dvolver el número menor a 10 con un cero adelante
    return numero < 10 ? `0${numero}` : numero;
  }
  
  module.exports = fechaA;
  