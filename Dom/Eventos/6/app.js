//Añade una clase CSS activo a un elemento con ID ítem1 al hacer clic en él y elimina la clase de cualquier otro elemento con clase activo.

var activo = document.getElementsByClassName('activo');
var item1 = document.getElementById('item1');


function eliminarClaseActivo() {
    for (var i = 0; i < activo.length; i++) {
        activo[i].classList.remove('activo');
    }
}

item1.addEventListener('click', function() {
    
    eliminarClaseActivo();

    item1.classList.add('activo');
});

















