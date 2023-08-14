
//Crea un programa que lea un archivo JSON con información de una lista de productos (nombre, precio, cantidad) y calcule el precio total de la lista. Luego, escribe un nuevo archivo JSON con los mismos datos y el precio total.


const fs = require('fs');
const productos = 'productos.json';

fs.readFile(productos, 'utf8', (err, data) => {
    if (err) {
      console.error('Error al leer el archivo:', err);
      return;
    }
    const parsedProductos = JSON.parse(data);
    const total = parsedProductos.reduce((sum, value) => (typeof value.precio === "number" ? sum + value.precio : sum), 0);
    console.log('Total suma productos:', total);
});

const sumaProductos = [
    {nombre: 'Shampoo',
    precio: 20,
    cantidad: 12},
    {nombre: 'Jabón',
    precio: 4,
    cantidad: 8},
    {nombre: 'Crema corporal',
    precio: 17,
    cantidad: 9},
    {nombre: 'Acondicionador',
    precio: 18,
    cantidad: 12},
    {nombre: 'Exfoliante',
    precio: 15,
    cantidad: 5},
    {total: 74}
];

const productosJson = JSON.stringify(sumaProductos, null, 2);

fs.writeFile('sumaProd.json', productosJson, (err, data) => {
    if(err) {
        console.error('Error al escribir el archivo', err);
        return;
    } 
console.log('Archivo JSON escrito exitosamente');
})



