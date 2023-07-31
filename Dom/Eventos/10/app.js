//Añade un evento change a un select con ID select y muestra el valor seleccionado en un elemento con ID valor.

const select = document.getElementById('select');
const valor = document.getElementById('valor');

select.addEventListener('change', function() {
    const valorFinal = select.value;
    valor.textContent = valorFinal;
});











