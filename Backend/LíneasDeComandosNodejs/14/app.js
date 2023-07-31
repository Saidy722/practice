//Crea un programa que lea un directorio y muestre información sobre el contenido de cada archivo, como el tamaño, la fecha de creación y la última fecha de modificación.

const fs = require("fs");//Importa el módulo 

function getFileInfo(filename) {//Contiene el argumento con el nombre del archivo del que se desea obtener la info
  const stat = fs.statSync(filename);//Para obtener información sobre el archivo especificado en filename. fs.statSync() devuelve un objeto fs.Stats que contiene información como el tamaño, las fechas de creación y modificación del archivo.
  return {//Objeto que se va a devolver como resultado de la función getFileInfo
    size: stat.size, //Propiedad size al objeto de retorno y asignación del tamaño del archivo obtenido de stat.size.
    creationDate: new Date(stat.ctime), //Agrego propiedad creationDate al objeto de retorno y le asigno la fecha de creación del archivo obtenida de stat.ctime
    modificationDate: new Date(stat.mtime),//"" Le asignoo la última fecha de modificación del archivo obtenida de stat.mtime
  };
}


const file = "directorio.js";//Donde se enncuentra el archivo
const fileInfo = getFileInfo(file);//Llamado a la función getFileInfo  con argumento file 
//El objeto fileInfo contendrá la información del archivo obtenida mediante la función getFileInfo
console.log(
  `${file}: ${fileInfo.size} bytes, created on ${fileInfo.creationDate}, modified on ${fileInfo.modificationDate}`
);
