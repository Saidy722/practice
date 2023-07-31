//Añade un elemento li a una lista ul cada vez que se haga clic en un botón con ID boton-li.

const add = document.getElementById('add');
const breakfast = document.getElementById('breakfast');

add.addEventListener('click', function(){

const buy = document.createElement('li');
buy.textContent = 'PAN';
breakfast.appendChild(buy);
});
